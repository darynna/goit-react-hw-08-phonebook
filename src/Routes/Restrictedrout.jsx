const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");
const { selectAuthToken } = require("redux/authSelectors")


export const RestricredRoute = ({children, redirectTo = "/contacts"}) =>{
    const authenticated = useSelector(selectAuthToken);

    return authenticated ? <Navigate to={redirectTo} replace/> : children
}