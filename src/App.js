import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import {login, logout} from "./features/userSlice";

function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
           //console.log("user is ", authUser);
            if(authUser) {
               // 사용자 로그인 함
                dispatch(
                    login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName,
                }));
           } else {
               // 사용자 로그아웃 함
                dispatch(logout());
           }
        });
    }, [dispatch]);

    return (
        <div className="app">
            {user ? (
                <>
                <Sidebar/>
                <Chat/>
                </>
            ): (
                <Login />
            )}
        </div>
    );
}

export default App;
