import { EmotionCache } from '@emotion/react';
import { Alert, Snackbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
// import Head from 'next/head';
import React from 'react';
import { ReactElement, ReactNode } from 'react';

import '../styles/global1.css';

import useSnackbarStore from '@/store/useSnackbarStore';

import muiTheme from '@/theme';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps &
  MyAppProps & {
    Component: NextPageWithLayout;
  };

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  const {
    origin,
    snackbarOpen,
    snackbarContent,
    snackbarSeverity,
    setSnackbarOpen,
  } = useSnackbarStore();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Pages Component={Component} {...pageProps} />
          {/*  */}
          <Snackbar
            anchorOrigin={origin}
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbarSeverity}
              sx={{ width: '100%' }}
            >
              {snackbarContent}
            </Alert>
          </Snackbar>
        </ThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}

interface IPages {
  Component: NextPageWithLayout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

function Pages({ Component, pageProps }: IPages) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <>
      {getLayout(
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
