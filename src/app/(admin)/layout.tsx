"use client"

import { ReactNode, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

const drawerWidth = 240;

const AdminLayoutContent = ({ children }: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!isLoggedIn) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AdminNavbar handleDrawerToggle={handleDrawerToggle} />
      <AdminSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}

export default AdminLayout;
