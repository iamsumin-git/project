// import { User } from '@/types/auth';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import { account, DATABASE_ID, databases, PROFILES_ID } from '@/lib/client';

import { updateUserProfileById } from '@/database/user';

import useAuthStore from '@/store/useAuthStore';

export interface WithAuthProps {
  // user: User;
  user: any;
  page?: React.ReactElement;
}

const HOME_ROUTE = '/';
const LOGIN_ROUTE = '/auth/login';

enum RouteRole {
  /**
   * For authentication pages
   * @example /login /register
   */
  auth,
  /**
   * Optional authentication
   * It doesn't push to login page if user is not authenticated
   */
  optional,
  /**
   * For all authenticated user
   * will push to login if user is not authenticated
   */
  all,
}

/**
 * Add role-based access control to a component
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
 * @see https://github.com/mxthevs/nextjs-auth/blob/main/src/components/withAuth.tsx
 */
export default function withAuth<T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>,
  routeRole: keyof typeof RouteRole
) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();
    const { query } = router;

    //#region  //*=========== STORE ===========
    const isAuthenticated = useAuthStore.useIsAuthenticated();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== STORE ===========

    const checkAuth = React.useCallback(() => {
      // const token = getFromLocalStorage('token');
      const token = Cookies.get('token');
      if (!token) {
        isAuthenticated && logout();
        stopLoading();
        return;
      }
      const loadUser = async () => {
        try {
          const user = await account.get();
          // fetch user profile data from db
          const userProfile = await databases.getDocument(
            DATABASE_ID,
            PROFILES_ID,
            user.$id
          );
          const { role, profile_img, listenerID } = userProfile;

          login({ ...user, ...{ role, profile_img, listenerID } } as any);
        } catch (err) {
          Cookies.remove('token');
        } finally {
          stopLoading();
        }
      };

      if (!isAuthenticated) {
        loadUser();
      }
    }, [isAuthenticated, login, logout, stopLoading]);

    // update user activity to track status activity for chats
    React.useEffect(() => {
      if (!isAuthenticated) return;
      const updateLastActivity = async () => {
        await updateUserProfileById(user?.$id, { lastActivity: new Date() });
      };
      // update immediatly on state change detected from
      updateLastActivity();
      const interval = setInterval(updateLastActivity, 60000);
      return () => clearInterval(interval);
    }, [isAuthenticated]);

    React.useEffect(() => {
      // run checkAuth every page visit
      checkAuth();

      // run checkAuth every focus changes
      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);

    React.useEffect(() => {
      if (!isLoading) {
        if (isAuthenticated) {
          // redirect from auth pages on authenticated
          if (routeRole === 'auth') {
            if (query?.redirect) {
              router.replace(query.redirect as string);
            } else {
              router.replace(HOME_ROUTE);
            }
            // window.location.href ='/'
            // window.location.reload();
          }
        } else {
          // Prevent unauthenticated user from accessing protected pages
          if (routeRole !== 'auth' && routeRole !== 'optional') {
            router.replace(
              `${LOGIN_ROUTE}?redirect=${router.asPath}`,
              `${LOGIN_ROUTE}`
            );
          }
        }
      }
    }, [isAuthenticated, isLoading, query, router, user]);

    if (
      // no logged user
      (isLoading || !isAuthenticated) &&
      // auth pages and optional pages are allowed to access without login
      routeRole !== 'auth' &&
      routeRole !== 'optional'
    ) {
      return (
        <div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
          <div className='relative mx-auto mb-2 h-[40px] w-[200px] object-scale-down'>
            <Image src='/logo.svg' alt='logo' fill />
          </div>
          <ImSpinner8 className='my-4 animate-spin text-4xl' />
        </div>
      );
    }

    return <Component {...(props as T)} user={user} />;
  };

  return ComponentWithAuth;
}
