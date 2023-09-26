import React,{useEffect,useState} from 'react';
import Header from "./conponent/common/Header";
import Footer from "./conponent/common/Footer";
import Main from "./conponent/common/Main";
import {BrowserRouter} from "react-router-dom";
import Login from "./conponent/page/content/member/Login";


function App() {
    const [isLogin, setIsLogin] = useState(false);


    useEffect(() => {
        if(localStorage.getItem('member') === null){
            // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
            console.log('isLogin ?? :: ', isLogin)
        } else {
            // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
            // 로그인 상태 변경
            setIsLogin(true)
            console.log('isLogin ?? :: ', isLogin)
        }
    })
  return(
      <>
          <BrowserRouter>
              <Header isLogin={isLogin}/>
              {isLogin ?
                  <Main isLogin={isLogin}/>:
                  <Login/>
              }
              <Footer/>
          </BrowserRouter>
      </>
  )
}

export default App;