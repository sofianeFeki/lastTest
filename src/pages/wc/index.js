import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../style/mainContainer';

const Wc = () => {
  const { drawer } = useSelector((state) => ({ ...state }));
  return (
    <MainContainer open={drawer}>
      <div>Wc</div>
    </MainContainer>
  );
};

export default Wc;
