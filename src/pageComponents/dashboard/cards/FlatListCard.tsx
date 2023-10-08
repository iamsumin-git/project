import { IconButton } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { MdBathroom, MdBedroomParent, MdKitchen } from 'react-icons/md';

import { useFlatStore } from '@/store/flatStore';

import Dialog from '@/features/Dialog';
import { ImageCard } from '@/features/my-flats/cards/ImageCard';
import { UpdateFlatModal } from '@/features/my-flats/Modal/UpdateFlatModal';
import { getFlatTypes } from '@/functions/getFlatType';

interface Iprop {
  data: any;
}
export const FlatListCard = (props: Iprop) => {
  const { data } = props;

  const galleryPhoto = JSON.parse(data.gallery);
  console.log('gallery photo', galleryPhoto);
  const [deleteId, setDeleteId] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const { setGallery, gallery } = useFlatStore();
  const deleteRoom = () => {
    // const newGallery = gallery.filter((r) => {
    //   return r.id != deleteId;
    // });
    // setGallery([...newGallery]);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };
  const handleDeleteDialog = (id: string) => {
    setDeleteId(id);
    setOpenDialog(true);
  };
  return (
    <div>
      <Dialog
        open={openDialog}
        type='delete'
        hideDialog={closeDialog}
        callBack={deleteRoom}
        Title='Are You Sure ?'
        SubTitle='You will not be able to revert this action.'
      />
      <div className='bg-secondary-main relative flex h-[450px]  w-[300px] flex-col items-center justify-center rounded-3xl p-3 align-middle'>
        <div className='relative z-50 h-full w-full overflow-hidden rounded-3xl'>
          {galleryPhoto?.[0]?.photos?.[0] ? (
            <ImageCard fileID={galleryPhoto?.[0]?.photos?.[0]} />
          ) : (
            <img
              src='/images/1.jpg'
              alt='room '
              className='h-full w-full rounded-3xl'
            />
          )}
        </div>
        <div className='text-primary-main absolute right-5 top-5 z-50 m-auto  flex h-[25px]  w-[60px] justify-center rounded-md  align-middle text-lg'>
          {/* <EditRoomsModal data={data} /> */}
          <UpdateFlatModal data={data!} />
          <div>
            <IconButton onClick={() => handleDeleteDialog('')}>
              <AiFillDelete />
            </IconButton>
          </div>
        </div>
        <div className='relative h-auto w-full pt-3'>
          <h3 className='line-clamp-1 p-1 text-lg font-bold text-white'>
            {data.costs.currency}.{data.costs.purchaseCost}
          </h3>
          <h3 className='line-clamp-1 p-1 text-lg font-bold text-blue-950'>
            Flat For {data.purpose} In {data.flatCity}
          </h3>
          <h3 className='line-clamp-1 p-1 text-sm font-bold text-black'>
            {data.flatStreet1}
          </h3>
          <div className='flex gap-3 text-sm text-black'>
            <IconButton className=' text-lg'>
              <MdBedroomParent />
              <span className='ml-1 mt-1 text-sm'>3</span>
            </IconButton>
            <IconButton className=' text-lg'>
              <MdKitchen />
              <span className='ml-1 mt-1 text-sm'>3</span>
            </IconButton>
            <IconButton className=' text-lg'>
              <MdBathroom />
              <span className='ml-1 mt-1 text-sm'>3</span>
            </IconButton>
          </div>
          <div className='flex flex-wrap gap-3'>
            {data.flatTypes.map((id, index) => (
              <span
                key={index}
                className='rounded-full border-[2px]  bg-black px-3 py-1 text-white'
              >
                {getFlatTypes(id)}
              </span>
            ))}
          </div>
          <div className='flex flex-row-reverse'>
            <Link href={`/flats/${data.$id}`}>
              {' '}
              <IconButton>
                <AiFillEye />
              </IconButton>
            </Link>
            <IconButton>
              <span className=' relative top-1 pr-1 text-lg'>12</span>
              <BiComment />
            </IconButton>
            <IconButton>
              <span className=' relative top-1 pr-1 text-lg'>123</span>
              <FcLike />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
