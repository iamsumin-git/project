import { useFlatStore } from '@/store/flatStore';

import { DisplayOtherRoomCard } from '@/features/my-flats/cards/DisplayOtherRoomCard';
import { AddOtherRoomModal } from '@/features/my-flats/gallery/modal/AddOtherRoomModal';

export const Others = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className=' flex h-auto w-full justify-center py-5 '>
        <AddOtherRoomModal />
      </div>

      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'other';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayOtherRoomCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
