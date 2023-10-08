import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Iprops {
  children: React.ReactNode;
}

const backgroundImages = [
  '/images/room1.webp',
  '/images/room2.jpg',
  '/images/room3.jpg',
  '/images/room4.jpg',
  // '/images/room5.jpg',
  // '/images/room6.jpg',
  // '/images/room7.jpg',
  // '/images/room8.jpg',
  // '/images/room9.jpg',
  // '/images/room10.jpg',
];

function AuthLayout(props: Iprops) {
  const [bgImage, setBgImage] = useState('');

  const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    setBgImage(`${randomImage}`);
  };

  useEffect(() => {
    changeBackgroundImage();

    const interval = setInterval(changeBackgroundImage, 3000);

    return () => clearInterval(interval);
  }, []);
  const { children } = props;
  return (
    <div className='login-page relative flex h-full items-center justify-center bg-cover bg-center px-10 py-4 md:h-screen md:flex-row lg:px-24'>
      <div className='flex flex-col rounded-lg bg-white  shadow-lg md:flex-row'>
        <div className=' bg-primary-main relative flex  min-w-[350px] flex-col items-center justify-center rounded-l-lg p-4'>
          <div className=' relative  h-[150px] w-[150px] rounded-full bg-white object-scale-down shadow-2xl'>
            <Image src='/logo.svg' alt='logo' fill className='' />
          </div>
          <div className=''>
            <h1 className=' mt-6 max-w-[350px] p-4 text-sm font-medium leading-[150%] text-white'>
              "Celebrate the joy of finding your perfect home online. Discover a
              world of possibilities with PickyFlats, where buying, selling, and
              searching for flats has never been easier. We empower you to
              navigate the real estate market effortlessly, connecting you with
              the ideal place to call your own. Your dream home awaits, just a
              click away."
            </h1>
          </div>
        </div>
        <div className=''>{children}</div>
      </div>
      <div>
        <Image
          fill
          src={bgImage}
          alt=' background image'
          className='z-[-8] transition-all'
          loading='eager'
        />
      </div>
    </div>
  );
}

export default AuthLayout;
