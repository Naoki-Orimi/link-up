import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const Login = ({ onLogin }) => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = () => {
        console.log('ログイン画面に移行します。');
        console.log(process.env.REACT_APP_API_URL + '/callback');
        // loginWithRedirect({ redirectUri: `${process.env.REACT_APP_API_URL}/callback`});
        // 別に引数は空でも行けた↓
        loginWithRedirect();
    };

    return (
        <Container maxWidth="xs">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Button
                    onClick={handleLogin}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        padding: '10px 20px',
                        borderRadius: '8px',
                        textTransform: 'none',
                    }}
                >
                    Auth ログイン実装したで！！
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
