export type User = {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  prefs: [key: string];
} & UserProfile;

// profiles data
export type UserProfile = {
  $id: string;
  $createdAt: string;
  name: string;
  role: 'user' | 'seller' | 'admin';
  profile_img: string;
  listenerID: string;
  profileVerified: any;
  accountType: string;
  lastActivity: string;
  personalInterest: any[];
  referredSource: any[];
  country: string;
  city: string;
};
