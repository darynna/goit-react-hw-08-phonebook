import styled from 'styled-components'


export const LogOutButton = styled.button`
width: 80px;
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

export const Box = styled.div`
display: flex;
gap: 12px;
align-items: center;
`
