import { Button } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { account } from '@/lib/client';

import { updateUserProfileById } from '@/database/user';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import TextField from '@/features/HookForm/TextField';

interface FormData {
  email: string;
  name: string;
}

export default function ProfileInformationForm() {
  const { user } = useAuthStore();
  const methods = useForm<FormData>({
    defaultValues: {
      email: user?.email,
      name: user?.name,
    },
  });
  const { control } = methods;
  const [loading, setLoading] = useState(false);
  const { openSnackbar } = useSnackbarStore();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      await account.updateName(data.name);
      await updateUserProfileById(user?.$id, { name: data.name }); //
      openSnackbar('Profile updated successfully!');
    } catch (error) {
      openSnackbar('Profile update failed!', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='mb-6 py-2'>
        <h3 className='text-lg font-semibold'>Profile Information</h3>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            <TextField
              control={control}
              name='email'
              label='Email'
              disabled
              defaultValue='email@pickyflats.com'
              className='!lg:w-1/2 !mt-0 w-full'
            />
            <TextField
              control={control}
              name='name'
              label='Full Name'
              className='!lg:w-1/2 !mt-0 w-full'
            />
          </div>
          <Button
            variant='outlined'
            color='primary'
            type='submit'
            disabled={loading}
          >
            Save
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
