import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import MUIDialog from '@mui/material/Dialog';
import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
// import { useDialogStore } from 'store/dialogStore'

interface Iprops {
  type: 'warning' | 'save' | 'submit' | 'cancel' | 'leave' | 'delete';
  callBack?: () => void;
  open: boolean;
  hideDialog?: () => void;
  Title?: string;
  SubTitle?: string;
}
//  use res boolean for callback to track url change
export default function Dialog(props: Iprops) {
  const { type, callBack, hideDialog, open, Title, SubTitle } = props;

  const handleConfirmation = () => {
    callBack?.();
    handleClose();
  };

  const handleClose = () => {
    if (hideDialog) hideDialog();
  };

  return (
    <MUIDialog open={open ?? true} onClose={handleClose}>
      <div className='flex max-w-[400px] flex-col gap-y-5 px-3 py-3 md:min-w-[400px] md:px-5 md:py-6'>
        <div className='flex'>
          <div className='flex-grow'>
            <IconButton className=' bg-slate-100'>
              {type == 'delete' ? <HiOutlineInformationCircle /> : <BsCheck2 />}
            </IconButton>
          </div>
          <div>
            <IconButton onClick={() => handleClose()}>
              <RxCross2 />
            </IconButton>
          </div>
        </div>
        <div>
          <h2 className=' text-xl font-bold'>{Title}</h2>
          <h3 className=' text-sm font-medium text-emerald-950'>{SubTitle}</h3>
        </div>
        <div className='flex flex-row-reverse gap-5 pt-5'>
          <Button
            variant='contained'
            startIcon={type == 'delete' ? <MdDelete /> : <BsCheck2 />}
            className={`${type == 'delete' ? ' bg-red-500' : ''}`}
            onClick={() => handleConfirmation()}
          >
            {type == 'delete' ? 'delete' : 'confirm'}
          </Button>
          <div className=''>
            <Button
              variant='outlined'
              startIcon={<RxCross2 />}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </MUIDialog>
  );
}
