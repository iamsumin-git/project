export type APPWRITE_ENV_MODE = 'CLOUD' | 'LOCAL';
export const appwriteConfig = {
  CLOUD: {
    API_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT,
    PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    collections: {
      PROFILES_ID: '647c063d490ee20fd175',
      LISTINGS_ID: 'listings',
      LISTINGCOSTS_ID: 'listingCosts',
      COMMENTS_ID: 'comments',
      // chat
      CONVERSATIONS_ID: 'conversations',
      MESSAGES_ID: 'messages',
      LISTENERS_ID: 'listeners',
      VERIFICATIONS_ID: 'verificationRequests',
      NOTIFICATIONS_ID: 'notifications',
      TOURREQUESTS_ID: 'tourRequests',
      RESERVATIONS_ID: 'reservations',
    },
    buckets: {
      listings: '',
      profiles: '',
      messages: 'messages',
      content: 'content',
    },
  },
  LOCAL: {
    API_ENDPOINT: 'https://localhost/v1',
    PROJECT_ID: 'pickyflats-dev',
    DATABASE_ID: 'pickyflats_web',
    collections: {
      PROFILES_ID: 'profiles',
      LISTINGS_ID: '64852e03b813c29bb019',
      LISTINGCOSTS_ID: 'listingCosts',
      COMMENTS_ID: 'comments',
      // chat
      CONVERSATIONS_ID: 'conversations',
      MESSAGES_ID: 'messages',
      LISTENERS_ID: 'listeners',
      VERIFICATIONS_ID: 'verificationRequests',
      NOTIFICATIONS_ID: 'notifications',
      TOURREQUESTS_ID: 'tourRequests',
      RESERVATIONS_ID: 'reservations',
    },
    buckets: {
      listings: 'listings',
      profiles: 'profiles',
      messages: 'messages',
      content: 'content',
    },
  },
};
