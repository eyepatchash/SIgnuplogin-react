import React,{useContext,useState,useEffect} from "react";
import "./App.scss";
import { Login, Register,Home } from "./components/login/index";
import fire from "./firebase";
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom"
import { AUthProvider } from "./contexts/AuthContext";
import {PrivateRoute} from "./components/login/PrivateRoute"
import {useAuth} from './contexts/AuthContext'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      user : {},
    };
    
  }

  componentDidMount() {
    //Add .right by default
    this.authListener();
    this.rightSide.classList.add("right");
    
  
  }
  

  authListener() {
    fire.auth().onAuthStateChanged((user) =>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }

  changeState() {
    const { isLogginActive } = this.state;
    

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    const { currentUser } = useAuth()
    };
    

    
    return (
      
      <div className="App">
         <div> {this.state.user ? (<Login/>): (<Home/>)}</div> 
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
                <PrivateRoute exact path="/" component={Home} />
          </div>

        </div>
       </div>
      
    )
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};


// const App2= () => {
//   const[user,setUser]=useState('');
//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const[passwordconf,setPasswordconf]=useState('');
//   const[passworderror,setPassworderror]=useState('1');
//   const[emailerror,setEmailerror]=useState('');
//   const[hasAccount,setHasAccount]=useState('');
  
//   const clearErrors = () =>{
//     setEmailerror('');
//     setPassworderror('');
//   };

//   const clearInputs = () =>{
//     setEmail('');
//     setPassword('');
//   };


//   const handleLogin =() =>{
//     clearErrors();
//     fire
//         .auth()
//         .signInWithEmailAndPassword(email,password)
//         .catch(err =>{
//           switch(err.Code){
//             case "auth/invalid-email":
//             case "auth/user-disabled":
//             case "auth/user-not-found":
//               setEmailerror(err.message);
//               break;
//             case "auth/wrong-password":
//               setPassworderror(err.message);
//               break;
            
//           }
//         });

//     };

//     const handleSignup = () =>{  
//     clearErrors();
//     fire
//         .auth()
//         .createUserWithEmailAndPassword(email,password)
//         .catch(err =>{
//           switch(err.Code){
//             case "auth/email-already-in-use":
//             case "auth/invalid-email":
//               setEmailerror(err.message);
//               break;
//             case "auth/weak-password":
//               setPassworderror(err.message);
//               break;
            
//           }
//         });
//     };


//     const handleLogout= () =>{
//       fire.auth().signOut();

//     };

//     const authListener =() =>{
//       fire.auth().onAuthStateChanged((user) => {
//         if(user){
//           clearInputs();
//           setUser(user);
//         }
//         else{
//           setUser('');
//         }
//       });
      
    
//     };
//   useEffect(() => {
//       authListener();
//     },[]);
//     return(
//       <div classname="App2">
//         <Login email={email} setPassword={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}
//         handleLogin={handleLogin} handleSignup={handleSignup}
//         setHasAccount={setHasAccount} emailerror={emailerror} passworderror={passworderror}/>

//         </div>)
//   }; 



// export const AppUSe=App2;
export default App;
