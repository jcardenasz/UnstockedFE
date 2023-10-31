'use client'
import React from 'react'
import './emailResetPass.css'

export default function emailResetPass(): JSX.Element {
    return (
        <div>            
	        <div className="row">
		        <h1>Forgot Password</h1>
		        <h6 className="information-text">Enter your registered email to reset your password.</h6>
		        <div className="form-group">
			        <input type="email" name="user_email" id="user_email"/>
			        <p><label>Email</label></p>
			        <button>Reset Password</button>
                    <h5>New here? <a href="#">Sign Up.</a></h5>
			        <h5>Already have an account? <a href="#">Sign In.</a></h5>
		        </div>
	        </div>
        </div>
)}