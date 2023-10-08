import { useFlatStore } from '@/store/flatStore';

import { DisplayRoomCard } from '@/features/my-flats/cards/DisplayRoomCard';
import { AddRoomModal } from '@/features/my-flats/gallery/modal/AddRoomModal';

export const Rooms = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className=' flex h-auto w-full justify-center py-5 '>
        <AddRoomModal />
      </div>

      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'room';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayRoomCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
