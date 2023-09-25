import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../content/NotFound";
import Login from "../content/member/Login";
import SignUp from "../content/member/SignUp";
import MemoInsert from "../content/memo/MemoInsert";

function MainAdd(){

    return(
        <>
            <Routes>
                <Route path="*" element={<NotFound/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
                <Route path="/" element={<MemoInsert/>}></Route>
            </Routes>
        </>
    );
}

export default MainAdd;