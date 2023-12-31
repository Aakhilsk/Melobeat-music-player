import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function DefaultLayout({ children }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="header flex justify-between p-5 shadow items-center" style={{ background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)' }}>
        <h1 className='text-3xl ml-7 font-bold cursor-pointer text-white' onClick={() => { navigate('/') }}>
          <b className='text-primary'>MELOBEAT</b> <b className='text-secondary'>MUSIC</b>
        </h1>
        <div className='flex items-center gap-2'>
          <h1 className='text-xl text-white'>{user?.name.toUpperCase()}</h1>
          <i className="ri-logout-circle-r-line text-xl cursor-pointer text-white" onClick={() => {
            localStorage.removeItem('token');
            window.location.reload();
          }}></i>
        </div>
      </div>
      <div className="content m-10">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
