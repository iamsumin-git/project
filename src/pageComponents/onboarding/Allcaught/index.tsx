import { MdDone } from 'react-icons/md';

const Alldone = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <div
        className='bg-primary-main flex h-20 w-20 items-center justify-center rounded-full
      border '
      >
        <MdDone className='text-4xl text-white' />
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-primary-main text-2xl font-semibold'>All done!</h1>
        <p className='text-primary-main text-base font-medium'>
          You are all set to go
        </p>

        <button
          className='bg-primary-main mt-5 rounded-md px-5 py-2 text-white'
          onClick={() => {
            window.location.href = '/';
          }}
          type='button'
        >
          Go to home
        </button>
      </div>
    </div>
  );
};

export default Alldone;
