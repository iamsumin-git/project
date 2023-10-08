import { Button, Dialog, IconButton } from '@mui/material';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

import Input from '@/components/Input';

import { Iroom, useFlatStore } from '@/store/flatStore';

import Uploader from '@/features/Uploader';
import { Viewer } from '@/features/Uploader/Viewer';

interface Iprop {
  data: Iroom;
}

export const EditBathRoomsModal = (props: Iprop) => {
  const { data } = props;
  const [open, setOpen] = useState(false);

  const [images, setImages] = useState<string[]>([]);

  const [roomName, setRoomName] = useState(data.name);
  const [remark, setRemark] = useState(data.remark);

  const { gallery, setGallery } = useFlatStore();
  const editRoom = () => {
    const newRoom: Iroom[] = gallery.map((room) => {
      if (room.id == data.id) {
        const editedRoom: Iroom = {
          id: room.id,
          name: roomName,
          roomType: data.roomType,
          remark: remark,
          photos: data.photos,
        };

        return editedRoom;
      } else {
        return room;
      }
    });

    setGallery([...newRoom]);
    setOpen(false);
  };

  return (
    <div className='relative'>
      <IconButton onClick={() => setOpen(true)}>
        <FaEdit />
      </IconButton>

      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth='md'
          fullWidth
        >
          <div className='flex h-[70vh] w-full flex-col overflow-y-scroll p-5 text-center  '>
            <div className='m-auto flex h-auto w-[80%] '>
              <div className='flex-grow text-left'>
                <h3 className=' text-xl'>Edit</h3>
              </div>
              <IconButton onClick={() => setOpen(false)}>
                <IoClose />
              </IconButton>
            </div>
            <div className='m-auto h-full w-[80%]'>
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
            </div>
            <div className='m-auto h-auto w-[80%] '>
              <Uploader onSuccess={(imgs) => setImages(imgs ?? [])} />
            </div>
            <div className='m-auto grid h-auto w-[80%] grid-cols-3 gap-9 '>
              {data.photos.map((i, index) => (
                <div key={index}>
                  <Viewer fileID={i} />
                </div>
              ))}
            </div>

            <div className='m-auto flex w-[80%] flex-row-reverse gap-5 pb-4 text-right'>
              <Button variant='contained' onClick={() => editRoom()}>
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
