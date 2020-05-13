import React, { Component } from 'react';

class Register1 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    onNameChange=(event)=>{
        //console.log(event.target.value);
        this.setState({name:event.target.value});
    }
    onEmailChange=(event)=>{
        //console.log(event.target.value);
        this.setState({email:event.target.value});
    }
    onPasswordChange=(event)=>{
        //console.log(event.target.value);
        this.setState({password:event.target.value})
    }
    
    onSubmiting=()=>{
        console.log(this.state);
        fetch('http://localhost:3000/register',{
          method:'post',
          headers:{'Content-Type':'application/jason'},
          body:JSON.stringify({
            name:this.state.name,
            email:this.state.email,
            password:this.state.email
          })
        })
        .then(Response=>Response.json())
        .then(user=>{
          console.log(user);
          if(user){
            console.log(user);
            this.props.onRouteChange('Home');
            //this.props.loadUser(user);
          }
        })
    }
    render() { 
        return (
            <div>
            <article className="mw6 center grow shadow-5 pa4 black-80">
            <h1>Register</h1>
  <form action="sign-up_submit" method="get" acceptCharset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    {/*<legend className="ph0 mh0 fw6 clip">Sign Up</legend>*/}
      <div className="mt3">
        <label className="db fw4 lh-copy f2" htmlFor="email-address">Name</label>
        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name"/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f2" htmlFor="email-address">Email address</label>
        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f3" htmlFor="password">Password</label>
        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="mt3">
    <input onClick={this.onSubmiting} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit"/>
    </div>
  </form>
</article>
</div>
    );}}
export default Register1;