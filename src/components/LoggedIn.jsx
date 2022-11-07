import React, {useEffect, useState} from "react";
import facade from "../utils/loginFacade";

export default function LoggedIn({setLoggedIn, loginCredentials}) {

    const logout = () => {
        facade.logout()
        setLoggedIn(false)
    }

    return (
        <div className="login-container">
            <p>{loginCredentials.user}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )

}