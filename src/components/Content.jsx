import React from 'react';
import GoogleLogin from "react-google-login";
import {useDispatch, useSelector} from "react-redux";
import {selectSignedIn, setSignedIn, setUserData,} from "../features/userSlice";

import "../assets/styles/content.css";

function Content(props) {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    return (
        <main className="home__page" style={{display: isSignedIn ? "none" : ""}}>
            {!isSignedIn ? (
                <div className="login__message">
                    <h2>📗</h2>
                    <h4>A Readers favourite place!</h4>
                    <p>
                        We provide high quality online resource for reading blogs. Just sign
                        up and start reading some quality blogs.
                    </p>
                    <GoogleLogin
                        clientId="1084334404054-jch76dh3eqbj787ostatku2t93h61muv.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login__button"
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
            ) : (
                ""
            )}
        </main>
    );
}

export default Content;
