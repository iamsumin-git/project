import React, { useEffect, useState } from 'react';

import { getSavedListingsByUserId } from '@/database/savedListing';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Loader from '@/components/Loader';

import useAuthStore from '@/store/useAuthStore';

import { SavedFlatCard } from '@/features/FlatCard/SavedFlatCard';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';

import { Listing } from '@/types/listing';

export default function SavedPage() {
  const { user } = useAuthStore();
  const [savedListings, setSavedListings] = useState<Listing[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaved = async () => {
      const _savedListings = await getSavedListingsByUserId(user!.$id);
      setSavedListings(_savedListings);
      setLoading(false);
    };
    fetchSaved();
  }, []);

  return (
    <div className=' p-5'>
      <div className='flex flex-col gap-4'>
        <div className=' '>
          <h1 className='text-primary-main text-2xl font-semibold'>
            Saved Items
          </h1>
          {/* we will add search box here */}

          <input
            type='text'
            className='border-primary-main mt-2 w-full rounded-md border px-5 py-2'
            placeholder='Search for saved items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <p
          className='text-primary-main text-base font-medium
        '
        >
          You can see your saved items here
        </p>
      </div>

      <div className=''>
        {loading && <Loader />}
        <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {savedListings
            .filter(
              (item) =>
                item.flatStreet1
                  ?.toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.flatCity?.toLowerCase().includes(search.toLowerCase()) ||
                item.flatCountry?.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, i) => (
              <SavedFlatCard key={i} data={item} />
            ))}

          {/* {SaveItems.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).map((item) => (
            <div
              key={item.id}
              className='relative flex flex-col gap-4 rounded-md bg-white p-5 shadow-md'
            >
              <div
                className='absolute right-2 flex cursor-pointer items-center gap-2'
                onClick={() => {
                  setSavedItems(savedItems.filter((i) => i.id !== item.id));
                  setSave(!save);
                }}
              >
                <BsFillBookmarkFill
                  className={`first-letter:text-primary-main text-2xl ${
                    save ? 'text-primary-main' : 'border-primary-main '
                  }`}
                />
                <p className='text-primary-main text-base font-medium'>Saved</p>
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='text-primary-main text-xl font-semibold'>
                  {item.title}
                </h1>
                <p className='text-primary-light text-base font-medium'>
                  {item.description}
                </p>
              </div>
              <div className=' relative flex h-40 w-full cursor-pointer overflow-hidden rounded-md'>
                <Image fill src={item.image} alt='' className=' object-cover' />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
SavedPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
