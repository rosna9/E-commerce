import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
const Login = () =>{
  const[ isSignInForm, setIsSignInForm] =useState(true);
   const[errorMessage, setErrorMessage] =useState(null);
const name =useRef(null);
 const email = useRef(null);
 const password =useRef(null);


const handleButtonClick =() =>{
  //validate the form data
 
  console.log(email.current.value);
  console.log(password.current.value);
  const message =checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);
     
  if(message) return;
    //create a new user
    //Sign In Sign Up Logic
    if(!isSignInForm){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
    else{
  
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
  
};
  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className='absolute'> 
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg'
       alt='background'/>
      </div>
      <form onSubmit ={(e)=>e.preventDefault()}
      className='w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-md'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm &&(
          <input
          type="text" placeholder='Full Name' className='p-4 my-2 w-full rounded-md text-black'/>
        )}
      <input 
      ref={email}
      type='text'
      placeholder='Email Address'
      className='p-4 my-2 w-full rounded-md opacity-30 text-black'
      />
      <input 
      ref={password}
       type= "password"
        placeholder='Password'
         className='p-4 my-2 w-full rounded-md opacity-25 text-black'
         />

<p className='py-2 text-white font-bold'>{errorMessage}</p>

    <button className='p-2 my-4 bg-red-700 w-full rounded-md'
     onClick={handleButtonClick}>
      {isSignInForm ? 'Sign In' : 'Sign Up'}
    </button>
    {/* <p className ='py-2 text-white  text-center'>OR</p>
    
    <button className='p-2 my-4 bg-red-700 w-full rounded-md'> Use a sign-in code</button>
     */}
    {/* <a  className="text-white text-center" href='#'>Forgot password?</a> */}
    <footer > 
      <div>
      {/* <input type='checkbox' name='rememberMe'checked /> */}
      {
      isSignInForm ? 
    <p className ='  py-2 text-white  text-center cursor-pointer' 
    onClick={toggleSignInForm}>
      New to Netflix? Sign up now.
      </p>:
    <p className='text-center'onClick={toggleSignInForm}>Already registered? Sign in Now.</p>}
    {/* <p className='py-2'><span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a>Learn more.</a></span></p> */}
    </div>
    </footer> 
    </form>
    
    </div>
    
  );
};

export default Login;