import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NotFound from "../content/NotFound";
import MemoList from "../content/memo/MemoList";
import MemoInsert from "../content/memo/MemoInsert";

function Main(){

    return(
        <>
            <Routes>
                <Route path="*" element={<MemoList/>}></Route>
            </Routes>
        </>
    );
}

export default Main;