import React from 'react';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: 'http://localhost:3000/' });
  };

  return (
    <IconButton
      onClick={handleLogout}
      color="inherit" // ここを変更します
      sx={{
        marginLeft: 'auto', // これで右端に配置されます
        color: 'white', // ここでアイコンの色を白に指定
      }}
    >
      <LogoutIcon />
    </IconButton>
  );
};

export default Logout;
