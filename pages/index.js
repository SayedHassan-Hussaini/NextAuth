import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
     <h2>Login Page</h2><br/>    
    <div class="login">    
    <form id="login" method="get" action="login.php">    
          <label><b>User Name</b></label>    
          <input type="text" name="Uname" id="Uname" placeholder="Username"/>    
          <br/><br/>    
          <label><b>Password</b>
          <input type="Password" name="Pass" id="Pass" placeholder="Password"/>        
          </label> 
          <br/><br/>     
          <input type="checkbox" id="check"/>    
          <span>Remember me</span>    
          <br/><br/>   
          <input type="button" name="log" id="log" value="Log In Here"/>
          <br/><br/> 
           <a href="#">Forgot Password</a>    
      </form>    
    </div>
    </>
  )
}
