// import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded'
// import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded'
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';

import Input from '@/components/Input';

export const ReplyCard = () => {
  return (
    <div>
      <div className='flex flex-col justify-center'>
        <div className='flex h-[50px] w-[100%] gap-3 '>
          <div className='flex h-[50px] w-full rounded-md border-[1px]  '>
            <div className='flex h-auto w-full'>
              <div className='flex w-full flex-grow'>
                <Input
                  type='text'
                  placeholder='Write Something'
                  className='h-[48px] w-[100%] border-none'
                />
              </div>
              <div className='flex p-1'>
                <div className='flex-shrink'>
                  <IconButton sx={{ padding: '4px', marginTop: '5px' }}>
                    p
                    {/* <InsertPhotoRoundedIcon sx={{ color: '#A2A1FF' }} /> */}
                  </IconButton>
                </div>

                <div className='flex-shrink'>
                  <IconButton sx={{ padding: '4px', marginTop: '5px' }}>
                    h
                    {/* <InsertEmoticonRoundedIcon sx={{ color: '#A2A1FF' }} /> */}
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-1.5'>
            <Button
              variant='contained'
              sx={{
                height: '38px',
                width: '88px',
                borderRadius: '5px',
                '&:hover': { boxShadow: 'none' },
                boxShadow: 'none',
              }}
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
