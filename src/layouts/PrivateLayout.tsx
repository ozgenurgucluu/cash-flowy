import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';

const PrivateLayout = () => {
  const [isLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);

  return (
    isLogin && (
      <div>
        PrivateLayout buraya header ekleyebilirsin
        <Outlet />
      </div>
    )
  );
};

export default PrivateLayout;
