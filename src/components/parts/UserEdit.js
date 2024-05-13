import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import SubTextDesign from '../../design/SubTextDesign.js';

function UserEdit({ user }) {
    // ユーザー情報の状態を管理するためのstate
    const [userData, setUserData] = useState({
        name: user.name,
        email: user.email,
        description: user.description,
    });

    // フォームの入力値が変更されたときに呼ばれるハンドラー
    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    // フォームが送信されたときに呼ばれるハンドラー
    const handleSubmit = (e) => {
        e.preventDefault();
        // フォームの送信処理を実装
        // ユーザー情報を更新するなどの処理を行う
        console.log('保存完了', userData);
    };

    useEffect(() => {
        console.log('UserEditコンポーネントがレンダリングされました。');
    }, []);

    return (
        <div style={{ alignItems: 'center', marginTop: '20px' }}>
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom sx={SubTextDesign}>
                    ユーザー編集
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Username"
                        name="username"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="discription"
                        name="discription"
                        value={userData.description}
                        onChange={handleInputChange}
                    />
                    {/* 他のユーザー情報の編集項目も追加 */}
                    <Button type="submit" variant="contained" color="primary">
                        保存
                    </Button>
                </form>
            </Container>
        </div>
    );
}

export default UserEdit;
