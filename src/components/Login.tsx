import { useState, useEffect } from 'react';
import Input from './Input';

const Login = () => {
  const [data, setData] = useState({
    email: 'ozgenurguclu0@gmail.com',
    password: 'Test123456*',
  });

  const handleSubmit = async () => {};

  useEffect(() => {}, []);
  return (
    <div>
      {' '}
      <div className="flex items-center justify-center h-screen bg-blue-600 ">
        <div className="flex flex-col items-center gap-3 space-y-2 bg-white p-10 py-16  rounded-md shadow-md">
          <div className="flex flex-col w-[360px] gap-1 ">
            <Input
              title="Email"
              value={data.email}
              onChange={(e: any) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-[360px] gap-1 ">
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 outline-none rounded-md p-3"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-[360px] bg-blue-400 rounded-md py-3 text-white text-lg font-semibold"
          >
            Login
          </button>
          <label className="italic text-gray-400">
            ozgenurguclu0@gmail.com Test123456*
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
