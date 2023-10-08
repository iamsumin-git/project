import Image from 'next/image';

export const DisplayFlatCard = () => {
  return (
    <div>
      <div className='relative flex h-[250px] w-[200px] cursor-pointer flex-col items-center justify-center rounded-md bg-slate-100 p-3 align-middle'>
        <div className='relative z-50 h-full w-full rounded-lg'>
          <Image src='/images/1.jpg' alt='room ' fill className='rounded-md' />
        </div>
        <div className='text-primary-main absolute right-5 top-5 z-50 m-auto flex h-[30px] w-[110px] flex-col justify-center rounded-md bg-white text-center align-middle text-lg'>
          $12,333{' '}
        </div>
        <div className='relative h-8 w-full'></div>
      </div>
    </div>
  );
};
