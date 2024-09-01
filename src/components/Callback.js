import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        // ローカルストレージにAuth0トークンを格納しているが、これがセキュリティ的にいいのか確認する必要あり。
        localStorage.setItem('accessToken', token);
        console.log('認証成功');
        navigate('/home');
      } catch (error) {
        console.log('認証エラー');
        console.error(error);
      }
    };

    fetchToken();
  }, [getAccessTokenSilently, navigate]);

  return <div>認証中です！</div>;
};

export default Callback;
