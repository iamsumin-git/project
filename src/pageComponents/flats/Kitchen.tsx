import useListingStore from '@/store/useListingStore';

import { DisplayKitchenCard } from '@/pageComponents/flats/cards/DisplayKitchenCard';

export const Kitchen = () => {
  const { gallery } = useListingStore();
  return (
    <div>
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
