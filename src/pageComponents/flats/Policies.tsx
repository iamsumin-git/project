import { Divider, IconButton } from '@mui/material';
import { BsCheck2Square } from 'react-icons/bs';

export const Policies = ({ flatPolicies }: { flatPolicies }) => {
  return (
    <div className=' h-auto w-full py-9'>
      <div>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Rules & Policies
        </h2>
        <Divider />
      </div>
      <div className='mt-9 grid grid-cols-1 gap-5 md:grid-cols-3'>
        {flatPolicies?.map((am, index) => (
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
    </div>
  );
};
