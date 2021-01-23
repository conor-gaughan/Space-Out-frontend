import styles from './Login.module.scss'

import { useState } from 'react'
import { login } from '../../services/userService'


function LoginPage(props) {
    const [formState, setFormState] = useState(getInitialFormState())

    function getInitialFormState() {
        return {
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
            await login(formState)
            setFormState(getInitialFormState)
            props.history.push('/')
            props.handleSignupOrLogin()

        } catch (error) {
            alert(error.message)
        }
   
    }

    return (
        
        <div className={styles.Login}>
            {/* <h1>LOGIN PAGE</h1> */}
            <form onSubmit={handleSubmit}>   
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type='email'
                placeholder="Email"
                >
                </input>
                
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type='password'
                placeholder="Password"
                >
                </input>
                
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage