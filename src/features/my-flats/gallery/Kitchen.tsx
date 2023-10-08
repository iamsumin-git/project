import { useFlatStore } from '@/store/flatStore';

import { DisplayKitchenCard } from '@/features/my-flats/cards/DisplayKitchenCard';
import { AddKitchenModal } from '@/features/my-flats/gallery/modal/AddKitchenModal';

export const Kitchen = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className=' flex h-auto w-full justify-center py-5 '>
        <AddKitchenModal />
      </div>

      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'kitchen';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayKitchenCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
