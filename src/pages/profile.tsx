import * as React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Seo from '@/components/Seo';

import DeleteAccount from '@/features/Profile/DeleteAccount';
import ProfileImage from '@/features/Profile/ProfileImage';
import ProfileInformationForm from '@/features/Profile/ProfileInformationForm';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function ProfilePage() {
  return (
    <>
      <Seo templateTitle='Profile' />
      <div className='container mx-auto lg:pt-4'>
        <div className='flex flex-col border-b border-gray-200 px-4 py-2'>
          <h2 className='text-2xl font-semibold'>Profile Settings</h2>
          <div className='text-secondary-main'>
            Update your photo and personal details here.
          </div>
        </div>
        {/* profile upload area */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-2 border-b border-gray-200  px-4 py-2 pb-4'>
            <ProfileImage />
          </div>
          <div className='border-b border-gray-200  px-4 py-2 pb-4'>
            <ProfileInformationForm />
          </div>
          <DeleteAccount />
        </div>
      </div>
    </>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
