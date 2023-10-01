import React from 'react';
import {Route, Routes} from "react-router-dom";
import MemoList from "../page/content/memo/MemoList";
import Login from "../page/content/member/Login";
import SignUp from "../page/content/member/SignUp";
import NotFound from "../page/content/NotFound";
import PythonText from "../page/content/memo/PythonText";

function Main(){

    return(
        <>
            <Routes>
                <Route path="/" element={<MemoList/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            <PythonText/>
        </>
    );
}

export default Main;