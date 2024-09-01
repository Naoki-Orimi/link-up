import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MainTextDesign from '../../design/MainTextDesign';
import SubTextDesign from '../../design/SubTextDesign.js';
import Logout from '../Logout';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleUnimplemented = () => {
        alert('未公開です。次回の更新をお待ちください！');
    }

    return (
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            >
            <MenuIcon />
            </IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem component={Link} to="/" onClick={handleClose} sx={ SubTextDesign }>ホーム</MenuItem>
            <MenuItem component={Link} to="/user" onClick={handleClose} sx={ SubTextDesign }>プロフィール</MenuItem>
            <MenuItem onClick={handleUnimplemented}>検索</MenuItem>
            <MenuItem onClick={handleUnimplemented}>履歴</MenuItem>
            </Menu>
            <Typography 
                variant="h6" 
                component={Link} 
                to="/"
                sx={{ ...MainTextDesign, textDecoration: 'none' }} 
            >
                Link Up
            </Typography>
            <Logout />
        </Toolbar>
        </AppBar>
    );
}

export default Header;