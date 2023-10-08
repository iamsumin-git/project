import { Button, Dialog, IconButton } from '@mui/material';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { SiAddthis } from 'react-icons/si';
import { uuid } from 'uuidv4';

import Input from '@/components/Input';

import { useFlatStore } from '@/store/flatStore';
import { Iroom } from '@/store/flatStore';

import Uploader from '@/features/Uploader';

export const AddRoomModal = () => {
  const [open, setOpen] = useState(false);

  const [roomName, setRoomName] = useState('');
  const [remark, setRemark] = useState('');

  const [images, setImages] = useState<string[]>([]);

  const { gallery, setGallery } = useFlatStore();
  const saveRoom = () => {
    const newRoom: Iroom = {
      id: uuid(),
      name: roomName,
      photos: images,
      roomType: 'room',
      remark: remark,
    };
    setGallery([...gallery, newRoom]);
    setOpen(false);
  };

  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <Button startIcon={<SiAddthis />} className=' capitalize'>
          Add Room
        </Button>

        {/* <AddCard /> */}
      </div>
      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth='md'
          fullWidth
        >
          <div className='flex h-[70vh] w-full flex-col p-5 text-center  '>
            <div className='flex h-auto w-full flex-row-reverse'>
              <IconButton onClick={() => setOpen(false)}>
                <IoClose />
              </IconButton>
            </div>
            <div className='m-auto  w-[80%] flex-grow'>
              <Input
                label='Room Name'
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
              <Input
                label='Remark'
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
              <Uploader onSuccess={(imgs) => setImages(imgs ?? [])} />
            </div>
            <div className='m-auto flex w-[80%] flex-row-reverse gap-5 pb-4 text-right'>
              <Button variant='contained' onClick={() => saveRoom()}>
                Save Room
              </Button>
              <Button variant='outlined' onClick={() => setOpen(false)}>
                Cancel
              </Button>{' '}
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
