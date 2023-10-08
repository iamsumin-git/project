import React from 'react';

import { NavBar } from '../../features/layout/NavBar';

interface IProps {
  children: React.ReactNode;
}

type Props = IProps;

function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div>
      <div className='fixed top-0 z-[401] w-full'>
        <NavBar />
      </div>
      <div className='mt-[50px] md:mt-[70px]'>{children}</div>
      {/* <div>footer</div> */}
    </div>
  );
}

export default MainLayout;
