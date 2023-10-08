import { Box, ClickAwayListener, IconButton, Popper } from '@mui/material';
import React from 'react';
import { RiNotification2Fill } from 'react-icons/ri';

export default function NotificationsPopover() {
  const [panelOpen, setPanelOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const toggleOpen = () => setPanelOpen(!panelOpen);
  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target) &&
      event.target !== anchorRef.current
    ) {
      return;
    }

    setPanelOpen(false);
  };

  return (
    <div className='relative'>
      <IconButton ref={anchorRef} onClick={toggleOpen}>
        <RiNotification2Fill />
      </IconButton>

      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          anchorEl={anchorRef.current}
          open={panelOpen}
          className='z-[402] rounded bg-white'
        >
          <Box
            boxShadow={3}
            className='flex h-[400px] w-[350px] flex-col overflow-hidden py-2'
          >
            <div className='text-text-secondary-default px-2 text-xl font-medium'>
              Notifications
            </div>
          </Box>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}
