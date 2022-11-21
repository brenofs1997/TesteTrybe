import styled from 'styled-components';

export const Container = styled.header`
  form{


    h1{

    }

    button{
      width: 100%;
      height: 44px;
      border: 0;
      cursor: pointer;
      background: #4a4a4a;
      border-radius: 20px;
      color: #FFFFFF;
      font-weight: 700;
      padding: 14px 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 12px;
      font-size: 14px;
      transition: background-color 0.2s;
    }

    button.login-button svg {
      margin-right: 16px;
    }

    button.login-button:hover {
      background: #3c3c3c;
    }

    label{
      display: flex;
      color: #495358;
      margin: 24px;
      line-height: 8px;
      font-size: 14px;
    }

    input{
      font-size: 14px;
      letter-spacing: -.24px;
      border: solid 1px #eee;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 18px 11px;
      border-radius: 5px;
      width: 100%;
      color: #666;
      -webkit-appearance: none;
    }
  }
`;

export const InputBlock = styled.header`

`;
