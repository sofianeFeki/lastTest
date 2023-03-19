import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../style/mainContainer';

const BackOffice = () => {
  const { drawer } = useSelector((state) => ({ ...state }));
  return (
    <MainContainer open={drawer}>
      <div>BackOffice</div>
    </MainContainer>
  );
};

export default BackOffice;
