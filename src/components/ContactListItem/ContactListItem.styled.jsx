import styled from 'styled-components'

export const ContactItems = styled.li`
display: flex;
align-items: center;
gap: 20px;
list-style-type: none;
`

export const DeleteButton = styled.button`
padding: 10px 30px;
font-size: 12px;
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

export const SpanName = styled.span`
font-weight: bold;
`