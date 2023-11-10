import { useDispatch } from "react-redux"
import { logOutThunk } from "redux/authReducer"

export const UserMenu = ({user})=>{
    const dispatch = useDispatch()
    return <div>
    <p>Hello, {user.name}</p>
    <button onClick={()=> dispatch(logOutThunk())}>Logout</button>
  </div>
}