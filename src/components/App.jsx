import { MainWrap } from './App.styled';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { ContactsPage } from 'pages/Contacts';
import { LoginPage } from './Registration/login';
import { RegisterPage } from './Registration/register';
import { Suspense, useEffect } from 'react';
import { refreshThunk } from 'redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RestricredRoute } from 'Routes/Restrictedrout';
import { PrivateRoute } from 'Routes/PrivateRout';
import Loader from './Loader/Loader';
import { selectAuthIsLoading } from 'redux/authSelectors';


export const App = () => {

  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectAuthIsLoading)

  useEffect(() =>{
    dispatch(refreshThunk())
   }, [dispatch])
  return (
    <MainWrap>
     <AppBar/>

     {!isRefreshing &&
     <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={<RestricredRoute><RegisterPage/></RestricredRoute>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={<RestricredRoute><LoginPage/></RestricredRoute>}/>
      </Routes>
      </Suspense>}
    </MainWrap>
  );
};
