import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

const initialState={

  input:'',
      imageUrl:'',
      box:{},
      route:'SignIn',
      isSignedIn:false,
      user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined:''
      }

}
class App extends Component {
  constructor(props){
  super(props);
    this.state=initialState;
  }

  loadUser=(data)=>{
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined:data.joined,
      }
    })
  }
//for checking the link to localhost:3000 -->
  /*
  componentDidMount(){
    fetch('http://localhost:3000')
    .then(response=>response.json())
    .then(console.log);
  }
  */
  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputImage');
    const width=Number(image.width);
    const height=Number(image.height);
    console.log(width,height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  onRouteChange=(route)=>{
    if(route==="Home") {
      this.setState({isSignedIn:true})
    }else {
      this.setState(initialState)
    }
    this.setState({route:route});
    //console.log(this.state.route);
  }
  displayFaceBox=(box)=>{
    console.log("Box:",box);
    this.setState({box:box});
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }
  onSubmit=()=>{
    this.setState({imageUrl:this.state.input});
    //fetch('http://localhost:3000/imageurl',{
      fetch('https://rajeevherokuapp.herokuapp.com/imageurl',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        input:this.state.input
      })
    })
    .then(response=>response.json())
      .then(response=>{
        if(response){
          //fetch('http://localhost:3000/image',{
              fetch('https://rajeevherokuapp.herokuapp.com/image',{
            method:'put',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
              id:this.state.user.id,
            })
          })
          .then(response=>response.json())  
          .then(count=>{
            this.setState(Object.assign(this.state.user,{entries:count})
            )
          }).catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err=>console.log(err))
      }
  render() { 
    //console.log("LInk:",this.state.imageUrl);
      return (
        <div className="App">
        {/*<h1>Comfortable Life ..!</h1>*/}
        <Navigation isSignedIn={this.state.isSignedIn}  onRouteChange={this.onRouteChange}/>
        {
          this.state.route==='Home'?
        <div>
        <Logo/>
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLinkForm onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
        </div>
        :(
          this.state.route==='SignIn'?
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          :
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
        }
        </div> 
    );
  }
}
export default App;
















