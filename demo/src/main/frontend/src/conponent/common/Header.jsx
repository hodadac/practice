import React from 'react';
import {Link} from "react-router-dom";
function Header(){

    return(
        <>
            <p>
                <Link to="/">
                   <p>home</p>
                </Link>
                <Link to="/login"><li>login</li></Link>
                <Link to="/signUp"><li>signUp</li></Link>

            </p>
        </>
    );
}

export default Header;