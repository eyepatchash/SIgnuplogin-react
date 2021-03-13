import React,{useState,useContext} from "react";
import loginimg2 from "../../5-things-that-developers-dislike-doing.svg";
import loginImg from "../../70259506.svg";
import {useAuth} from "../../contexts/AuthContext.js"
import fire from "../../firebase";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
      email:'',
      password:'',
    }
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
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header1">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} className="regispic"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="xyz@email.com"required 
                onChange={this.handleChange}
                value={this.state.email} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password"  placeholder="password" 
              required
              onChange={this.handleChange}
              value={this.state.password} />
            </div>
            <div className="form-group">
              <label htmlFor="password conf">Password Confirmation</label>
              <input type="text" name="password confirmation" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer1">
          <button type="button" className="btn1" onClick={this.signup}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;