import styles from './SignUp.module.scss'

import { useState } from 'react';
import { signup } from '../../services/userService';

function SignupPage(props) {
    const [formState, setFormState] = useState({
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        password: ""
    })

    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            await signup(formState)
            setFormState(getInitialFormState)
            props.history.push('/dashboard')
            props.handleSignupOrLogin()

        } catch (error) {
            alert(error.message)
        }
   
    }

    return (
        <div className={styles.SignUp}>
            <form onSubmit={handleSubmit}>
                <input 
                value="First Name"
                onChange={handleChange} 
                name="firstName" 
                type='text'>
                </input>
                <input 
                value="Last Name" 
                onChange={handleChange} 
                name="lastName" 
                type='text'>  
                </input>
                
                <input 
                value="Email"
                onChange={handleChange} 
                name="email" 
                type='email'>
                </input>
                
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type='password'
                placeholder='Password'
                >
                </input>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default SignupPage