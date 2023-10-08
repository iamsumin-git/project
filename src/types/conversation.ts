import { Message } from '@/types/message';

export interface Conversation {
  participants: string[];
  lastUpdated: string;
  lastMessageID: string;
  chatStarter: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $collectionId: string;
  $databaseId: string;
  participant: Participant;
  lastMessage: Message;
}

export interface Participant {
  profile_img: string;
  role: string;
  name: string;
  profileVerified: boolean | null;
  accountType: string;
  lastActivity: string;
  listenerID: string;
  personalInterest: string[];
  referredSource: string[];
  country: string;
  city: string;
  email: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $collectionId: string;
  $databaseId: string;
}
