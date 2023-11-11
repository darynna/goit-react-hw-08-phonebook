import styled from 'styled-components';

export const Title = styled.h2`
text-align: center;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  background: #f0e4f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #513568
`;

export const Input = styled.input`
box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #513568;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    background: #321e42;
    color: #c89cec
    box-shadow: 0 0 20px #6fc5ff50;
    transform: scale(1.1);
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;




//   background-color: #c89cec;
//   color: #513568;