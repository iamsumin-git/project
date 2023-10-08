import { SnackbarOrigin } from '@mui/material';
import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

interface SnackbarStore {
  snackbarOpen: boolean;
  snackbarContent: string;
  snackbarSeverity: SnackbarSeverity;
  origin: SnackbarOrigin;
  setSnackbarOpen: (isOpen: boolean) => void;
  openSnackbar: (
    content: string,
    severity?: SnackbarSeverity,
    origin?: SnackbarOrigin
  ) => void;
}

const useSnackbarStoreBase = create<SnackbarStore>((set) => ({
  origin: { vertical: 'top', horizontal: 'right' },
  snackbarOpen: false,
  snackbarContent: '',
  snackbarSeverity: 'success',
  setSnackbarOpen: (isOpen) => set(() => ({ snackbarOpen: isOpen })),
  openSnackbar: (
    content,
    severity = 'success',
    origin = { vertical: 'top', horizontal: 'right' }
  ) => {
    set(() => ({
      snackbarContent: content,
      snackbarSeverity: severity,
      snackbarOpen: true,
      origin,
    }));
  },
}));

const useSnackbarStore = createSelectorHooks(useSnackbarStoreBase);

export default useSnackbarStore;
