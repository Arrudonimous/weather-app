import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  color: #324252;
  background-color: #fff;
  height: 20rem;

  small{
    font-size: 16px;
    margin-top: 47px;
    color: #000;
  }

  h2{
    font-size: 24px;
    margin-top: 12px;
    margin-bottom: 4px;
  }

  h1{
    font-size: 124px;
  }

  span{
    text-transform: uppercase;
    margin-bottom: 34px;
    font-size: 18px;
  }

`;

const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid blue;
  border-radius: 50%;
  border-top: 4px solid #ffffff;
  animation: ${spinAnimation} 0.8s linear infinite;
`;
