import useListingStore from '@/store/useListingStore';

import { DisplayBathRoomCard } from '@/pageComponents/flats/cards/DisplayBathroomCard';

export const Bathrooms = () => {
  const { gallery } = useListingStore();
  return (
    <div>
      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'bathroom';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayBathRoomCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
