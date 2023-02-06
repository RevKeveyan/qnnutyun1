import { useState } from "react";
import { PostUsers } from "../../Platform/Api";
import {useNavigate} from "react-router";

import './style.scss'
export const Form = () =>{
    const navigate = useNavigate()
    const [profile, setProfile] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        file:'',
    })

    const [error, setError] = useState({
        nameErr:'',
        emailErr:'',
        passwordErr:'',
        confirmPasswordErr:'',
        fileErr:'',
    })

    const changeInput = (e) =>{
        setProfile({...profile, [e.target.name]:e.target.value})
    }


    const validation = () =>{
        let valid = true;
        const error={
            nameErr:'',
            emailErr:'',
            passwordErr:'',
            confirmPasswordErr:'',
            fileErr:'',
        }
        
        if(!profile.name){
           error.nameErr='Name id required'
            valid = false;
        }
        if(!profile.email || !(/[A-z\d-_]+@[a-z]+.[a-z]{2,}/).test(String(profile.email).toLowerCase())){
            error.emailErr='Email is Required *'
            valid = false;
        }
        if(!profile.password){
            error.passwordErr='Password is Required *'
            valid = false;
        }
        if(profile.confirmPassword !== profile.password || profile.confirmPassword === ''){
            error.confirmPasswordErr ='Passwords do not match *'
            valid = false;
        }
        if(!profile.file){
           error.fileErr='Please chose file *'
            valid = false;
        }

        setError(error)
        return valid;
    }

   
    const changeFile = (e)=>{
        const fr = new FileReader()
            fr.readAsDataURL(e.target.files[0])
            fr.onload = function(event) {
                setProfile({...profile, file : event.target.result })
          };
        }

        const Post = async () =>{

            if(validation()){
              await PostUsers(profile)
                navigate('/profile')
                
            }
        
        }


    return (
        <div className="form">
            <label className={error.nameErr? "red" : null}
             htmlFor="name">
             {error.nameErr ? error.nameErr : "Name"}
             </label><br></br>
            <input onChange={changeInput} type="text" id="name" name="name"/><br></br>

            <label 
            className={error.emailErr? "red" : null} 
            htmlFor="email">
            {error.emailErr ? error.emailErr :"Email"}
            </label><br></br>
            <input onChange={changeInput} type="text" id="email" name="email"/><br></br>

            <label 
            className={error.passwordErr? "red" : null}
            htmlFor="password">
            {error.passwordErr ? error.passwordErr :"Password"}
            </label><br></br>
            <input onChange={changeInput} type="password" id="password"  name="password"/><br></br>

            <label 
            className={error.confirmPasswordErr? "red" : null}
            htmlFor="confirmPass">
            { error.confirmPasswordErr ? error.confirmPasswordErr :'Confirm password'}</label><br></br>
            <input onChange={changeInput} type="password" id="confirmPass"  name="confirmPassword"/><br></br>

            <label
            className={error.fileErr? "red" : null}
            htmlFor="file">
            {error.fileErr ? error.fileErr :"Chose file"}
            </label><br></br>
            <input onChange={changeFile} type="file" id="file" name="file"/><br></br>

            <button className="btn" onClick={Post}>Sign Up</button>
        </div>
    );
}