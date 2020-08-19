import React from 'react';
import './css/login_elegant.css';


const Login_elegant = ({fecha}) => {
  return (

<form class="login" className="login_elegant">
  
  <fieldset>
    
  	<legend class="legend">Login</legend>
    
    <div class="input">
    	<input type="email" placeholder="Email" required />
      <span><i class="fa fa-envelope-o"></i></span>
    </div>
    <br/>
    <div class="input">
    	<input type="password" placeholder="Password" required />
      <span><i class="fa fa-lock"></i></span>
    </div>
    <br/>
    <button type="submit" class="submit" >Enviar</button>
    
  </fieldset>
  
  
  
</form>

)
}

export default Login_elegant;