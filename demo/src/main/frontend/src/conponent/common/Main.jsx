import React from 'react';
import {Route, Routes} from "react-router-dom";
import MemoList from "../page/content/memo/MemoList";
import Login from "../page/content/member/Login";
import SignUp from "../page/content/member/SignUp";
import NotFound from "../page/content/NotFound";
function Main(){

    return(
        <>
            <Routes>
                <Route path="/" element={<MemoList/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </>
    );
}

export default Main;