const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");
const { selectAuthToken } = require("redux/authSelectors")


export const PrivateRoute = ({children, redirectTo = "/login"}) =>{
    const authenticated = useSelector(selectAuthToken);

    return authenticated ? children : <Navigate to={redirectTo} replace/> 
}