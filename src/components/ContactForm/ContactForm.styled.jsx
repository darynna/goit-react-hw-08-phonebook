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
height: 24px;
border: none;
border-radius: 3px;
font-size: 16px`

export const AddButton = styled.button`
width: 140px;
padding: 4px;
background: #513568;
color: #fff;
border: none;
border-radius: 3px;
cursor: pointer;
transition: all 0.5s;
-webkit-transition: all 0.5s;

&:hover{
  background: #321e42;
  color: #c89cec
  box-shadow: 0 0 20px #6fc5ff50;
  transform: scale(1.1);
}
`