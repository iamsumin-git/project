import React from 'react';

import Skeleton from '@/components/Skeleton';

export default function FullListingSkeleton() {
  return (
    <div className='flex space-x-4 py-4'>
      <div className='w-[350ox]'>
        <Skeleton className='h-full w-[300px]' />
      </div>
      <div className='flex-grow space-y-4'>
        <div className='flex justify-between'>
          <Skeleton className='h-[40px] w-[30vw]' />
          <Skeleton className='h-[40px] w-[10vw]' />
        </div>
        <Skeleton className='h-[40px] w-[35vw]' />
        <Skeleton className='h-[30vh] w-full' />
        <div className='space-y-4'>
          <Skeleton className='h-[30px] w-[25vw]' />
          <div className='flex space-x-2'>
            <Skeleton className='h-[15px] w-[15vw]' />
            <Skeleton className='h-[15px] w-[15vw]' />
          </div>
          <div className='flex space-x-2'>
            <Skeleton className='h-[15px] w-[15vw]' />
            <Skeleton className='h-[15px] w-[15vw]' />
          </div>
        </div>
        <div className='space-y-4'>
          <Skeleton className='h-[30px] w-[25vw]' />
          <div className='flex space-x-2'>
            <Skeleton className='h-[15px] w-[15vw]' />
            <Skeleton className='h-[15px] w-[15vw]' />
          </div>
          <div className='flex space-x-2'>
            <Skeleton className='h-[15px] w-[15vw]' />
            <Skeleton className='h-[15px] w-[15vw]' />
          </div>
        </div>
        <Skeleton className='h-[30vh] w-full' />
      </div>
    </div>
  );
}
