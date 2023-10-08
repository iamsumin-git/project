export interface Comment {
  listingID: string;
  userID: string;
  comment: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $collectionId: string;
  $databaseId: string;
  user?: {
    name: string;
    profile_img: any;
  };
}
