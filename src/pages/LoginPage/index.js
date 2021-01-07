import { useState } from 'react'
import { login } from '../../services/userService'


function LoginPage(props) {
    const [formState, setFormState] = useState(getInitialFormState())

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
            await login(formState)
            setFormState(getInitialFormState)
            props.history.push('/dashboard')

        } catch (error) {
            alert(error.message)
        }
   
    }

    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>   
                <input 
                value={formState.email} 
                onChange={handleChange} 
                name="email" 
                type='email'>
                </input>
                
                <input 
                value={formState.password} 
                onChange={handleChange} 
                name="password" 
                type='password'>
                </input>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default LoginPage