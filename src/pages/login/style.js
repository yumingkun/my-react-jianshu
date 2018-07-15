import styled from 'styled-components';

export const LoginWrapper=styled.div`
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;

`;
export const LoginBox=styled.div`
    
    width: 400px;
    height: 230px;
    margin: 80px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
    padding-top: 20px;
    h1{
      font-size: 30px
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    
`;

export const Input=styled.input`
     
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    background: #fff;
    color: #777777;
    
`;

export const Button=styled.div`

    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 20px auto;
    text-align: center;
`;