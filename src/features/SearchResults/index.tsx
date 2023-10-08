import { FlatCardV1 } from '@/features/FlatCard/FlatCard';

export const SearchResults = ({ listings }: { listings: any[] }) => {
  return (
    <div className=' relative grid w-full gap-5 p-3  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {listings.map((item, i) => (
        <FlatCardV1 key={i} data={item} />
      ))}
      {/* <FlatCard /> */}
      {listings.length < 1 && <p>No any flats available</p>}
    </div>
  );
};
