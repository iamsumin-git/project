import { Box } from '@mui/material';
import MuiModal from '@mui/material/Modal';
import React from 'react';

import useModalStore from '@/store/useModalStore';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}
export default function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;
  const { fullView } = useModalStore();

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: fullView ? '100%' : 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    maxHeight: fullView ? '100%' : '90%',
  };
  return (
    <MuiModal open={isOpen} onClose={onClose}>
      <Box
        sx={modalStyle}
        className={`overflow-y-auto rounded p-4 ${props.className}`}
      >
        {children}
      </Box>
    </MuiModal>
  );
}
