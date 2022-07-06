import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './components/Feed/Feed';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log('userAuth', userAuth);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          })
        );
      } else {
        console.log('userAuth', userAuth);
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app bg-[#f3f2ef] h-screen">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="body flex">
          <Sidebar />
          <Feed />
        </div>
      )}
      {/*3. Widgets */}
    </div>
  );
}

export default App;
