import { Dialog, IconButton } from '@mui/material';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';

import { ImageCard } from '@/features/my-flats/cards/ImageCard';

interface Iprops {
  photos: string[];
  name: string;
}
export const DisplayPhotosModal = (props: Iprops) => {
  const [open, setOpen] = useState(false);
  const { photos, name } = props;
  return (
    <div className='h-full w-full   '>
      <div
        className='absolute top-0 z-50 h-full w-full cursor-pointer'
        onClick={() => setOpen(true)}
      ></div>
      <Dialog
        open={open}
        fullWidth
        maxWidth='lg'
        onClose={() => setOpen(false)}
      >
        <div className='flex w-full px-9 py-9 '>
          <div className='flex-grow '>
            <h3 className=' text-primary-main text-lg font-semibold '>
              {name}
            </h3>
          </div>
          <div className=''>
            <IconButton onClick={() => setOpen(false)}>
              <CgClose />
            </IconButton>
          </div>
        </div>
        <div className=' grid h-[90vh] grid-cols-2  gap-9 p-9 '>
          {photos.map((p) => (
            <div key={p} className='relative h-[400px] bg-red-600 object-cover'>
              <ImageCard fileID={p} />
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
};
