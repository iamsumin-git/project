import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <CircularProgress />
    </div>
  );
};

export default Loader;
