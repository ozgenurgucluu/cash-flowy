import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginPage = () => {
  const [data, setData] = useState({
    email: 'ozgenurguclu0@gmail.com',
    password: 'Test123456*',
  });

  const handleSubmit = async () => {
    console.log('Giriş yapılıyor:', data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-300">
      <div className="flex flex-col items-center gap-3 space-y-2 bg-white  p-10 py-16 rounded-md shadow-2xl">
        <h1 className="text-3xl font-semibold">Login</h1>

        <Input
          title="Email"
          value={data.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, email: e.target.value })
          }
          size="medium"
          color="gray"
        />

        <Input
          title="Password"
          size="medium"
          color="gray"
          value={data.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <Button
          onClick={handleSubmit}
          size="medium"
          color="blue"
          title="Login"
        />

        <label className="italic text-gray-400">
          ozgenurguclu0@gmail.com / Test123456*
        </label>
      </div>
    </div>
  );
};

export default LoginPage;
