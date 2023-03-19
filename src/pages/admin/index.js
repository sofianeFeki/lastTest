import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../style/mainContainer';

const Admin = () => {
  const { drawer } = useSelector((state) => ({ ...state }));

  return <MainContainer open={drawer}>Admin</MainContainer>;
};

export default Admin;
