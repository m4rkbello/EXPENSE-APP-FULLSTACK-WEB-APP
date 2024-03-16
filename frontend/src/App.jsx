import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Wallet from './Components/Student';

import ResetPassword from './Components/User/ResetUser/FindUserEmail';
import NotFound from './Components/Pages/404';
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { fetchUserRequest, loginUserPost } from './redux/actions/userActions'
import UserProfile from './Components/User/Profile/UserProfile';

function App(props) {
  console.log("HOY GANA!", props&&props);

 
  const [hasToken, setHasToken] = useState(false);
  const [isAuthLocalStorage, setIsAuthLocalStorage] = useState(null);

  const isAuthenticatedUser = useSelector(state => state.userReducer.loginResponse.user);

  
  console.log("USESELECTOR REDUX", isAuthenticatedUser);

  // const isUserAuthenticated = props?.
  

  useEffect(() => {
    // Check if token exists in localStorage or cookies
    const token = localStorage.getItem('M4rkbelloFullstackPersonalAccessToken') && getCookie('M4rkbelloFullstackPersonalAccessToken');
    // const user = localStorage.setItem('M4rkbelloFullstackUserAuthenticated');

    console.log("DATA LOCALSTORAGE!", token);
    // console.log("DATA LOCALSTORAGE!", user);
    if (token) {
      setHasToken(true);
    }
    props.fetchUserRequest();
  }, []);

  useEffect(() => {
    if (isAuthenticatedUser !== undefined && isAuthenticatedUser !== null) {
      const authUserToLocalStorage = JSON.stringify(isAuthenticatedUser);
      localStorage.setItem('userAuthenticatedByLocalStorage', authUserToLocalStorage);
      sessionStorage.setItem('userAuthenticatedBySessionStorage', authUserToLocalStorage);
    }
  
    const storedFromLocalStorageData = localStorage.getItem('userAuthenticatedByLocalStorage');
    let parsedUserData = null;
  
    if (storedFromLocalStorageData) {
      parsedUserData = JSON.parse(storedFromLocalStorageData);
      const extractedProperties = getUserProperties(parsedUserData);
      setIsAuthLocalStorage(extractedProperties);
    }
  }, [isAuthenticatedUser]);
  
  const getUserProperties = (userData) => {
    if (userData) {
      const { name, email, password } = userData;
      return { name, email, password };
    }
    return null;
  };



  console.log("NAME SA USER", isAuthLocalStorage);




  
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const userCollection = props?.userData?.loginResponse?.users;
  console.log("USER NA !", userCollection);


  function getUserAuthenticated(userCollection) {
    let filteredUsers = [];
    if (userCollection) {
      for (let i = 0; i < userCollection.length; i++) {
        if (userCollection[i].id === 1) {
          filteredUsers.push(userCollection[i]);
        }
      }
    }
    return filteredUsers;
  }
  
  const userSpecific = getUserAuthenticated(userCollection);
  console.log("DATA NA GI FILTER!", userSpecific);
  

  
  console.log("LOCAL STORAGE", isAuthenticatedUser);
  return (
    <div className='shadow-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-screen'>
    <div className="navbar shadow-2xl ..  bg-black">

        {hasToken.length !== 0 && hasToken ? (
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

              <label htmlFor="my-drawer" className="btn btn-primary drawer-button">   <AiOutlineMenu /> Menu</label>

            </div>
            <div className="shadow-2xl drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-black text-base-content">
                <li>
                  <Link to="/home">
                    HOME<AiFillHome />
                  </Link>
                </li>
                <li>
                  <Link to="/wallet">WALLET</Link>
                </li>
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">pullsnack</Link>
          </div>
        )
        }
        <div className="flex-none" style={{ display: 'flex' }}>
          <ul className="menu menu-horizontal px-1">
            {hasToken.length !== 0 && hasToken ? (
              <div>
              <Link to="/profile">
              <div className="avatar online">
              <div className="w-14 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              </div>
              </Link>
              </div>
            ) : (
              <div>
                <ul className="menu menu-horizontal px-1 text-white text-base">
                  <li className='shadow-2xl'>
                    <Link to="/login">Login</Link>
                  </li>
                  <li className='shadow-2xl '>
                    <Link to="/register">Register</Link>
                  </li>
                  <li className='shadow-2xl '>
                </li>
                </ul>
              </div>
            )}
          </ul>

        </div>

      </div>

      <div className='max-w-7xl mx-auto mt-6'>
        <Routes>
          {hasToken ? (
            <>

              <Route path="/home" element={<Home />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="profile" element={<UserProfile />} />
            </>

          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/resetpassword" element={<ResetPassword />} />

            </>
          )}
        </Routes>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  console.log("DATA SA MAPTOSTATETOPROPS", state.userReducer);
  return {
      userData: state.userReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRequest: () => dispatch(fetchUserRequest()),
    // loginResponse: () => dispatch(loginResponse()),
    // loginUserPost: (userData) => dispatch(loginUserPost(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



