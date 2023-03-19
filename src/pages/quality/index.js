import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../style/mainContainer';

const Quality = () => {
  const { drawer } = useSelector((state) => ({ ...state }));

  return <MainContainer open={drawer}>Quality</MainContainer>;
};

export default Quality;
