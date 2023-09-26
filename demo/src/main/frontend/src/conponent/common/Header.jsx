import React from 'react';
import {Link} from "react-router-dom";
function Header(props){
    const flag = props.isLogin;
    const logoutClick = () =>{
        localStorage.removeItem('member');
        document.location.href='/'
    }
    return(
        <>
            <div>
                <Link to="/">
                   <font>home</font>
                </Link>

                {flag ?
                    <button type="button" onClick={logoutClick}>logOut</button>:
                    <span>
                        <Link to="/login"><button>login</button></Link>
                        <Link to="/signUp"><button>signUp</button></Link>
                    </span>

                }
            </div>
        </>
    );
}

export default Header;