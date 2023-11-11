import { MainWrap } from './App.styled';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect, lazy } from 'react';
import { refreshThunk } from 'redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RestricredRoute } from 'Routes/Restrictedrout';
import { PrivateRoute } from 'Routes/PrivateRout';
import Loader from './Loader/Loader';
import { selectAuthIsLoading } from 'redux/authSelectors';


const Home = lazy(() => import('pages/Home.jsx'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const RegisterPage = lazy(() => import('./Registration/register'));
const LoginPage = lazy(() => import('./Registration/login'));


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
        <Route path="/contacts" element={<PrivateRoute><ContactsPage/></PrivateRoute>}/>
        <Route path="/register" element={<RestricredRoute><RegisterPage/></RestricredRoute>}/>
        <Route path="/login" element={<RestricredRoute><LoginPage/></RestricredRoute>}/>
      </Routes>
      </Suspense>}
    </MainWrap>
  );
};
