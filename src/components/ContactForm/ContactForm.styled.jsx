import styled from 'styled-components'

export const Form = styled.form`
display: flex;
gap: 20px;
justify-content: center;
margin-bottom: 20px
`

export const Label = styled.label`
display: flex;
align-items: center;
gap: 10px;
font-size: 20px
`

export const Input = styled.input`
width: 130px;
height: 20px;
border: none;
border-radius: 10px

`

export const AddButton = styled.button`
padding: 12.5px 30px;
font-size: 18px;
border: 0;
border-radius: 100px;
background-color: #c89cec;
color: #ffffff;
font-weight: Bold;
transition: all 0.5s;
-webkit-transition: all 0.5s;

&:hover{
    background-color: #513568;
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);
}
`