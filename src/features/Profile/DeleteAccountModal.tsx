import { Button } from '@mui/material';
import React, { useState } from 'react';

import useAuthStore from '@/store/useAuthStore';

interface ModalProps {
  // open?: boolean;
  onClose: () => void;
}

export default function DeleteAccountModal({ onClose }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuthStore();
  const handleDelete = async () => {
    setLoading(true);

    //TODO: !delete user completely
    // logout and reload page on finally
  };
  return (
    <div>
      <h2 className='mb-2 text-lg font-semibold'>
        Proceed with Account Deletion
      </h2>
      <p className='mb-4 text-sm'>
        Are you sure you want to delete your account?
      </p>
      {loading && (
        <div className='mb-2 h-1 w-full overflow-hidden bg-gray-200'>
          <div className='bg-secondary-main h-full animate-pulse'></div>
        </div>
      )}
      <div className='flex justify-end'>
        {!loading && (
          <Button
            onClick={onClose}
            className='mr-2 normal-case text-gray-500 hover:text-gray-700'
          >
            Cancel
          </Button>
        )}
        <Button
          disabled={loading}
          onClick={handleDelete}
          color='error'
          variant='contained'
          className=' px-4 py-2 normal-case'
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
