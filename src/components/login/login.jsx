import React from "react";
import loginImg from "../../70259506.svg";
import loginimg2 from "../../5-things-that-developers-dislike-doing.svg";
import Appuse from "../../App"
import fire from "../../firebase"
import {useHistory, Router} from "react-router-dom"

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      loginactive: false,
    }
  }
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u)
      this.state.loginactive=true;
    }).catch((err) => {
      console.log(err);
      if (this.state.loginactive){
        
      }
    })
  }
  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u)
    }).catch((err) => {
      console.log(err);
    })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
   

    return (

      

      <section className="Login">
        <div className="base-container" >
          <div className="header">Login</div>
          <div className="content">
            <div className="image1">
              <img src={loginimg2} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="xyz@email.com"
                  autoFocus required
                  onChange={this.handleChange}
                  value={this.state.email} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" id="password" required
                  onChange={this.handleChange}
                  value={this.state.password} />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={this.login} href="this./login">
              Login
          </button>
        
          </div>
        </div>
      </section>
    );
  }
}

export default Login;