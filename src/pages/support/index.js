import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from '../../style/mainContainer';

const Support = () => {
  const { drawer } = useSelector((state) => ({ ...state }));
  return (
    <MainContainer open={drawer}>
      <div>Support</div>
    </MainContainer>
  );
};

export default Support;
