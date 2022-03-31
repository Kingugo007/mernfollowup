import { useState } from "react"
import  Wrapper  from "../../components/registerForm"
import FormRow from "../../components/form"
import axios from 'axios'
import { Logo } from "../../components/logo"
import { Marginer } from "../../components/marginer"
import { Link } from "react-router-dom"
import { PageNav } from "../../components/pageNav"

export const Register = () => {
const urlRegister = 'https://backendug.herokuapp.com/api/auth/register'
const initialState = {
  username: '',
  email: '',
  password: '',
  
}
const [values, setValues] = useState(initialState)
const [error, setError] = useState(false);

const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

// handleSubmit function send user info to the database by updating the initialSatae values
const handleSubmit = async (e) => {
e.preventDefault();
setError(false)

if(values.password && values.username && values.email){ 
try {
const res = await axios.post(urlRegister, {
username : values.username,
email: values.email,
password: values.password
});

res.data && window.location.replace("/login")
console.log(res.data)
 } catch(err) {
  setError(true)
 }
} else{
  setError(true)
  console.log('no values')
}

} 
    return (
      <>
        <PageNav />
       <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
         <Logo />
         <Marginer direction="vertical" margin="1em" />
       <p> {error && <span style={{color: 'red'}}>something went wrong!</span>} </p>
          <FormRow
            type='text'
            name='username'  
            placeholder="Enter your username"  
            handleChange={handleChange}       
          />
                
       <FormRow
          type='email'
          name='email'
          placeholder="Enter your valid email"
          handleChange={handleChange}
          />
            
        <FormRow
          type='password'
          name='password'
          placeholder="Enter your secret password" 
         handleChange={handleChange}        
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
         <button type="button" className="member-btn" >
          Already a member ? <Link to="/login" style={{ color: '#4154f1'}}>Login</Link>
         </button>
        </p> 
      </form>
      
    </Wrapper>
    </>
  )
    
}