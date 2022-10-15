import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    margin-bottom: 28px;
    font-size: 62px;
    background: linear-gradient(180deg, #399DFA 0%, #134DD6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @media(max-width: 420px){
      font-size: 48px;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media(max-width: 420px){
    flex-direction: column;
  }


  input{
    border-radius: 4px;
    border: none;
    padding: 22px 14px;
    width: 70%;
    outline: 0;
    height: 100%;

    &::placeholder{
      color: #a9a9a9;
    }

    @media(max-width: 420px){
      width: 100%;
      margin-bottom: 14px;
      font-size: 12px;
    }

  }

  button{
    height: 100%;
    padding: 18px 35px;
    background-color: #295DD6;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    @media(max-width: 420px){
      width: 100%;
      font-size: 13px;
    }
  }
`;
