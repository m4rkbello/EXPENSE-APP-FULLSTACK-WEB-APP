import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Home from './Components/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import QrCodeLoginAuthentication from './Components/Authentication/QrCodeLoginAuthentication';
import Wallet from './Components/Student';
import Sidebar from './Components/SideBar';
import ResetPassword from './Components/User/ResetUser/FindUserEmail';
import NotFound from './Components/Pages/404';
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { fetchUserRequest } from './redux/actions/userActions';
import UserProfile from './Components/User/Profile/UserProfile';
import GetLocLongLat from './Services/GetLocLongLat'; './Services/GetLocation';
import EditProfileModal from './Components/User/UserModals/EditProfileModal';
import { useRef } from 'react';

function App(props) {
  const [hasToken, setHasToken] = useState('');
  const [isAuthLocalStorage, setIsAuthLocalStorage] = useState(null);

  const isAuthenticatedUser = useSelector(state => state.userReducer.loginResponse.user);

  const editUserProfileModalRef = useRef(null);

  useEffect(() => {
    // Check if token exists in localStorage or cookies
    const token = localStorage.getItem('M4rkbelloFullstackPersonalAccessToken') && getCookie('M4rkbelloFullstackPersonalAccessToken');

    if (token) {
      setHasToken(true);
    }

    props.fetchUserRequest();
  }, []);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const userCollection = props?.userData?.loginResponse?.users;

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
      const { id, name, email, password } = userData;
      return { id, name, email, password };
    }
    return null;
  };

  function getUserAuthenticated(userCollection) {
    let filteredUsers = [];
    if (userCollection && isAuthLocalStorage) {
      for (let i = 0; i < userCollection.length; i++) {
        if (userCollection[i].id === isAuthLocalStorage.id) {
          filteredUsers.push(userCollection[i]);
        }
      }
    }
    return filteredUsers;
  }

  const userAuthenticated = getUserAuthenticated(userCollection);

  return (
    <div className='shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... min-h-screen'>
      <EditProfileModal ref={editUserProfileModalRef} id="edit_user_profile" title="Add Student" />
      <div className="navbar shadow-2xl bg-black flex justify-between items-center px-4 py-2">
        {hasToken && hasToken.length !== 0 ? (
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                <AiOutlineMenu /> Menu
              </label>
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
                <Link to="/getlocation">Get location</Link>
                <Link to="/sidebar">Sidebar</Link>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">pullsnack</Link>
          </div>
        )}
        <div className="flex-none" style={{ display: 'flex' }}>
          <ul className="menu menu-horizontal px-1">
            {hasToken && userAuthenticated && userAuthenticated.length > 0 ? (
              <>
                {userAuthenticated.map((user, index) => (
                  <span className='text-3xl pt-3 pe-3' key={index}>
                    {user.name}
                  </span>
                ))}
                <div>

                  <div className="avatar online">
                    <div className="w-14 rounded-full">
                      <button onClick={() => editUserProfileModalRef.current && editUserProfileModalRef.current.showModal()}>
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </button>
                    </div>
                  </div>


                </div>
              </>
            ) : (
              <div>
                <ul className="menu menu-horizontal px-1 text-white text-base">
                  <li className='shadow-2xl'>
                    <Link to="/qrc">Scan QR</Link>
                  </li>
                  <li className='shadow-2xl'>
                    <Link to="/login">Login</Link>
                  </li>
                  <li className='shadow-2xl'>
                    <Link to="/register">Register</Link>
                  </li>
                  <li className='shadow-2xl'>
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
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/getlocation" element={<GetLocLongLat />} />
              {/* Remove Sidebar route from here */}
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/qrc" element={<QrCodeLoginAuthentication />} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
