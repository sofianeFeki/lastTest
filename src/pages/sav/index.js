import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../style/mainContainer';

const Sav = () => {
  const { drawer } = useSelector((state) => ({ ...state }));

  return <MainContainer open={drawer}>Sav</MainContainer>;
};

export default Sav;
