import React, {useContext, useEffect, useRef, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

function SignIn(props) {
    const context = useContext(AuthContext);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        window.document.body.classList.add("login");

    })

    async function handleSubmit(event){

        event.preventDefault();

        await context.signIn(emailRef.current.value, passwordRef.current.value);

        if(context.currentUser != null)
        {
            context.setErrors(null, false);
            navigate("/interests");

        }
        else {
            setErrors(context.errors);
        }
    }


    return (
        <div id="back">

            <div className="container-fluid" id="center">
                <div className=" row justify-content-start">
                    <div className="col-md-4 col-sm-10 p-0">
                        <div className="loginbackground">
                            <div className="card-body text-white">


                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3" id="email">
                                        <label>Email</label>
                                        <input className="form-control" type="email" required ref={emailRef}/>
                                    </div>
                                    <div className="form-group mb-3" id="password">
                                        <label>Password</label>
                                        <input className="form-control" type="password" required ref={passwordRef}/>
                                    </div>
                                    <button className="w-100 btn btn-outline-light" type="submit" >Sign In</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={"footer2"}><center>© 2022 G-Info To You <img src="http://localhost:3000/img/smallbold_logo.png" id="small" /></center></div>
        </div>
    );
}

export default SignIn;