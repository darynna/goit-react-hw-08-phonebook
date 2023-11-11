import { useDispatch } from "react-redux"
import { logOutThunk } from "redux/authReducer"
import { Box, LogOutButton } from "./UserMenu.styled"

export const UserMenu = ({user})=>{
    const dispatch = useDispatch()
    return <Box>
    <p>Hello, {user.name}</p>
    <LogOutButton onClick={()=> dispatch(logOutThunk())}>Log out</LogOutButton>
  </Box>
}