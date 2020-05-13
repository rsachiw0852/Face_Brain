import React, { Component } from 'react';
class SignIn extends Component {
  constructor(props){
    super(props)
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }
  onSignEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value})
  }
  onSignPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value});
  }

  // onSubmitChange=()=>{
  //   console.log(this.state);
  //   debugger;
  //   this.props.onRouteChange("Home")
  // }
  
  onSubmitChange=()=>{
    //console.log(this.state);
    //fetch('http://localhost:3000/signIn',{
      fetch('https://rajeevherokuapp.herokuapp.com/signIn',{
      method:'post',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
    //this.props.onRouteChange('Home');
    .then(Response=>Response.json())
    .then(user=>{
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('Home');
      }
    })
  }
  render() { 
    const {onRouteChange}=this.props;
    return(
      <div>
      <article className="mw6 center shadow-5 grow br4 pa3 pa4-ns mv5 ba b--black-10">
      <main className="pa4 black-80">
<div className="measure">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
    <div className="mt3">
      <label className="db fw4 lh-copy f3" >Email</label>
      <input onChange={this.onSignEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
    </div>
    <div className="mv3">
      <label className="db fw4 lh-copy f3"  >Password</label>
      <input onChange={this.onSignPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
    </div>
    <label className="pa0 ma0 lh-copy f5 pointer"><input type="checkbox"/> Remember me</label>
  </fieldset>
  <div className="">
    <input onClick={this.onSubmitChange} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Sign in"/>
  </div>
  <div className="lh-copy mt3">
  <p style={{cursor:'pointer'}} onClick={()=>onRouteChange('Register')}  className="f4 link dim black db">Register</p>
  {/*
    <a href="#0" className="f6 link dim black db">Forgot your password?</a>
    */
  }
  </div>
</div>
</main>
      </article>
      </div>
  )
}
}
export default SignIn;
