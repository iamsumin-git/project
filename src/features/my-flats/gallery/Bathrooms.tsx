import { useFlatStore } from '@/store/flatStore';

import { DisplayBathRoomCard } from '@/features/my-flats/cards/DisplayBathroomCard';
import { AddBathroomModal } from '@/features/my-flats/gallery/modal/AddBathroomModal';

export const Bathrooms = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className=' flex h-auto w-full justify-center py-5 '>
        <AddBathroomModal />
      </div>

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
