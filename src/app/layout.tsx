"use client"

import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body> 
        <AppRouterCacheProvider>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </Provider>
        </AppRouterCacheProvider> 
      </body>
    </html>
  );
}

export default RootLayout;
