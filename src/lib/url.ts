import { APP_URL } from '@/lib/client';

export default function withAppURL(path: string) {
  return APP_URL + path;
}
