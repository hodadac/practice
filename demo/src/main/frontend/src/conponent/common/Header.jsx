import React from 'react';
import {Link} from "react-router-dom";
function Header(){

    return(
        <>
            <div>
                <Link to="/">
                   <font>home</font>
                </Link>
                <Link to="/login"><li>login</li></Link>
                <Link to="/signUp"><li>signUp</li></Link>

            </div>
        </>
    );
}

export default Header;