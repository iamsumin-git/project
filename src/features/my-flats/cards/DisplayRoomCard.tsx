import { IconButton } from '@mui/material';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

import { Iroom } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import Dialog from '@/features/Dialog';
import { ImageCard } from '@/features/my-flats/cards/ImageCard';
import { EditRoomsModal } from '@/features/my-flats/gallery/modal/EditRoomModal';

interface Iprop {
  data: Iroom;
}
export const DisplayRoomCard = (props: Iprop) => {
  const { data } = props;

  const [deleteId, setDeleteId] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const { setGallery, gallery } = useFlatStore();
  const deleteRoom = () => {
    const newGallery = gallery.filter((r) => {
      return r.id != deleteId;
    });

    setGallery([...newGallery]);
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
      <div className='relative z-[50] flex h-[250px] w-[200px] flex-col  items-center justify-center overflow-hidden rounded-md bg-slate-100 p-3 align-middle'>
        <div className='relative  z-10 h-full w-full overflow-hidden rounded-lg '>
          <ImageCard fileID={data.photos[0]} />
          {/* <Image src='/images/1.jpg' alt='room ' fill className='rounded-md' /> */}
        </div>
        <div className='text-primary-main absolute right-5 top-5 z-50 m-auto  flex h-[25px]  w-[60px] justify-center rounded-md  align-middle text-lg'>
          <EditRoomsModal data={data} />
          <div>
            <IconButton onClick={() => handleDeleteDialog(data.id)}>
              <AiFillDelete />
            </IconButton>
          </div>
        </div>
        <div className='relative h-8 w-full'>
          <h3 className='text-primary-main line-clamp-1 p-1 text-lg font-bold'>
            {data.name}
          </h3>
        </div>
      </div>
    </div>
  );
};
