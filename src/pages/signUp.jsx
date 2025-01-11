import logo2 from '../photos/logo2.png'
import '../signUp.css'

export default function SignUp() {

    return(
        <div className='containerofcontainer'>
        <div className='signincontainer'>
            <img 
            className='signinPhoto'
            src={logo2} alt='logo2'/>
            <h3 className='signintitle'>Welcome back!</h3>
            <input className='emailinput' placeholder='Email'/>
            <input className='passwordinput'
            placeholder='Password'/>
            <button 
            className='signinbutton'
            >Sign In</button>
            <div className='orbutton'>Or</div>
            <button className='googlebutton'>Sign in with Google</button>
            <div className='create'>Create a new Account</div>
        </div>
        </div>
    )

}