import React, { useEffect, useState } from 'react';

import { isEmptyArray } from '@/lib/helper';

import { getReservedListingsForUser } from '@/database/booking';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Loader from '@/components/Loader';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import { BookingFlatCard } from '@/features/FlatCard/BookingFlatCard';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function MyBookings() {
  const { user } = useAuthStore();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(true);

  const [bookedFlats, setBookedFlats] = useState<any[]>([]);
  const { openSnackbar } = useSnackbarStore();

  const fetchReservedListings = async () => {
    try {
      const listings = await getReservedListingsForUser(user?.$id);
      setBookedFlats(listings);
    } catch (error) {
      openSnackbar('Failed to fetch my bookings', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservedListings();
  }, []);

  return (
    <div className='w-full p-5'>
      <h3 className='text-primary-main text-3xl font-semibold'>My Bookings</h3>

      <div>
        {loading && <Loader />}

        <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {bookedFlats.map((item, i) => (
            <BookingFlatCard key={i} data={item} />
          ))}
        </div>

        {!loading && isEmptyArray(bookedFlats) && (
          <div className='flex flex-col'>
            <h4 className=' text-secondary-main text-xl font-semibold'>
              No Bookings Found
            </h4>
            <div>
              You have not made any bookings yet. Start exploring our available
              flats and make your first booking today!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const HomePageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
MyBookings.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageWrapper page={page} />;
};
