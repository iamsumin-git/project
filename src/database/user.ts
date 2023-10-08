import { DATABASE_ID, databases, PROFILES_ID } from '@/lib/client';

export const updateUserProfileById = async (userID, data) => {
  await databases.updateDocument(DATABASE_ID, PROFILES_ID, userID, data);
};
