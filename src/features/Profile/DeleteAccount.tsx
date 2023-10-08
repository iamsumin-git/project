import { Button } from '@mui/material';
import React from 'react';

import Modal from '@/components/Modal';

import DeleteAccountModal from '@/features/Profile/DeleteAccountModal';

export default function DeleteAccount() {
  const [deleteModal, setDeleteModal] = React.useState(false);

  return (
    <>
      <div className='relative space-y-2 rounded border border-red-400 px-4 py-3 text-red-700'>
        <div className='font-bold'>Danger Zone!</div>
        <p className='text-sm'>
          Deleting your account is irreversible and all your data will be
          permanently removed from PickyFlats.
        </p>
        <Button
          className='mt-2 normal-case'
          color='error'
          onClick={() => setDeleteModal(true)}
        >
          Delete Account
        </Button>
      </div>

      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <DeleteAccountModal onClose={() => setDeleteModal(false)} />
      </Modal>
    </>
  );
}
