import { Alert, AlertTitle, Button, IconButton } from '@mui/material';
import React from 'react';
import { IoInformationOutline } from 'react-icons/io5';

import DashboardLayout from '@/components/layout/DashboardLayout';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
import { SummaryCard } from '@/pageComponents/dashboard/cards/SummaryCards';

export default function DashboardPage() {
  const { user } = useAuthStore();
  return (
    <div className='relative h-full w-full overflow-y-scroll p-5'>
      <div className=' '>
        <Alert severity='info' className='kdj'>
          <div className='items-start space-y-2 md:flex md:justify-between md:space-x-2'>
            <div>
              <AlertTitle>Profile Verification Required</AlertTitle>
              Create your listing now, but please note that it will be visible
              to the public only after profile verification.
            </div>
            <div className='my-auto flex md:justify-end'>
              <Button variant='contained'>Start Verification</Button>
            </div>
          </div>
        </Alert>
      </div>
      <div className='flex gap-9 py-5'>
        <SummaryCard title='Listed Flats' count={3} subtitle=' ' />
        <SummaryCard
          title='Total Comments'
          count={33}
          subtitle='31 comments Last Month'
        />
      </div>
      <div className='absolute bottom-5 right-5 flex h-[50px] w-[50px] flex-col justify-center rounded-full border-[2px] bg-slate-200 text-center align-middle'>
        <IconButton>
          <IoInformationOutline />
        </IconButton>
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
