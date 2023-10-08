interface TimeAgoProps {
  suffix: boolean;
}
export function timeAgo(date: Date, props?: TimeAgoProps) {
  const now = new Date();
  const diff = Math.round((now.getTime() - date.getTime()) / 1000); // Difference in seconds

  const shuffix = props?.suffix ? 'ago' : '';

  if (diff < 60) {
    return 'just now';
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes}m ${shuffix}`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours}h ${shuffix}`;
  } else if (diff < 2592000) {
    const days = Math.floor(diff / 86400);
    return `${days}d ${shuffix}`;
  } else if (diff < 31536000) {
    const months = Math.floor(diff / 2592000);
    return `${months}mo ${shuffix}`;
  } else {
    const years = Math.floor(diff / 31536000);
    return `${years}y ${shuffix}`;
  }
}
