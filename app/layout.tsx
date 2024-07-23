'use client'; // Mark this as a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import ThemeProvider from '../components/ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en"> {/* Root HTML tag */}
      <body> {/* Root Body tag */}
        <Provider store={store}> {/* Redux provider */}
          <ThemeProvider> {/* MUI Theme provider */}
            {children} {/* Render children */}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
