export interface Message {
  conversationID: string;
  senderID: string;
  message: string;

  // read/delivered !FEATURE UPDATE
  isRead: boolean;
  isDelivered: boolean;
  attachments: any[];
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}
