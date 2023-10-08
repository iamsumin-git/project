import { Divider, IconButton } from '@mui/material';
import { BsCheck2Square } from 'react-icons/bs';

export const AllAmenities = ({
  buildingAmenities,
  flatAmenities,
}: {
  buildingAmenities?: string[];
  flatAmenities?: string[];
}) => {
  return (
    <div className=' h-auto w-full py-9'>
      <div>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Building Amenities
        </h2>
        <Divider />
      </div>
      <div className='mt-9 grid grid-cols-1 gap-5 md:grid-cols-3'>
        {buildingAmenities?.map((am, index) => (
          <h3
            key={index}
            className=' text-secondary-main text-sm font-semibold'
          >
            <span className='relative top-[-3px]'>
              <IconButton>
                <BsCheck2Square />
              </IconButton>
            </span>
            {am}
          </h3>
        ))}
      </div>

      <div className='my-5'>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Flat Amenities
        </h2>
        <Divider />
      </div>
      <div className='mt-9 grid grid-cols-3 gap-5'>
        {flatAmenities?.map((item, index) => (
          <h3
            key={index}
            className=' text-secondary-main text-sm font-semibold'
          >
            <span className='relative top-[-3px]'>
              <IconButton>
                <BsCheck2Square />
              </IconButton>
            </span>
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
};
