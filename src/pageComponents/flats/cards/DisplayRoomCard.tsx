import { useState } from 'react';

import { Iroom } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import Dialog from '@/features/Dialog';
import { ImageCard } from '@/features/my-flats/cards/ImageCard';
import { DisplayPhotosModal } from '@/pageComponents/flats/DisplayPhotosModal';

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
      <div className='relative flex h-[250px] w-[200px]  flex-col items-center justify-center rounded-md bg-slate-100 p-3 align-middle'>
        <div className='relative z-50 h-full w-full rounded-lg'>
          <ImageCard fileID={data.photos[0]} />
          {/* <Image src='/images/1.jpg' alt='room ' fill className='rounded-md' /> */}
        </div>
        <DisplayPhotosModal photos={data.photos} name={data.name} />

        <div className='relative h-8 w-full'>
          <h3 className='text-primary-main line-clamp-1 p-1 text-lg font-bold'>
            {data.name}
          </h3>
        </div>
      </div>
    </div>
  );
};
