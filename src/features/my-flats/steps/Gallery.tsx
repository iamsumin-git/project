import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

import { Bathrooms } from '@/features/my-flats/gallery/Bathrooms';
import { Kitchen } from '@/features/my-flats/gallery/Kitchen';
import { Others } from '@/features/my-flats/gallery/Others';
import { Rooms } from '@/features/my-flats/gallery/Rooms';

const Gallery = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='m-auto  h-full  w-[80%]'>
      <div>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='secondary'
            aria-label='secondary tabs example'
            variant='scrollable'
            allowScrollButtonsMobile
          >
            <Tab value='one' label='Rooms' />
            <Tab value='two' label='Kitchen' />
            <Tab value='three' label='Bathrooms' />
            <Tab value='four' label='Others' />
          </Tabs>
        </Box>

        <div className='h-auto w-full px-5'>
          {value == 'one' && (
            <div>
              <Rooms />
            </div>
          )}
          {value == 'two' && (
            <div>
              <Kitchen />
            </div>
          )}

          {value == 'three' && (
            <div>
              <Bathrooms />
            </div>
          )}

          {value == 'four' && (
            <div>
              <Others />
            </div>
          )}
        </div>
      </div>
      <div className='flex h-auto w-full  flex-wrap justify-center gap-5 align-middle   '></div>
    </div>
  );
};

export default Gallery;
