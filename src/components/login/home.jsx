import React from "react";
import loginImg from "../../70259506.svg";
import loginimg2 from "../../5-things-that-developers-dislike-doing.svg";
import fire from"../../firebase"


export class Home extends React.Component {
    constructor(props) {
    super(props)
     this.state= {

     }
    }
    logout(){
      fire.auth().signOut();
    }
  render(){

  return (
    <div>
        <h1>
            Home
        </h1>
        <button  onClick={this.logout}>
            Logout
        </button>
    </div>

     
  );
}
}

export default Home;
