import { IconButton } from '@mui/material';
import { SiAddthis } from 'react-icons/si';

export const AddCard = () => {
  return (
    <div>
      <div className='flex h-[150px] w-[150px] cursor-pointer flex-col items-center justify-center rounded-md bg-slate-100 align-middle'>
        <div className='h-[35px] w-[35px]'>
          <IconButton>
            <SiAddthis />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
