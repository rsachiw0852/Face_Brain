import React from 'react';
import Tilt from 'react-tilt';
// @ts-ignore
import brain from './brain.png';
import './Logo.css';
const Logo=()=>{
    //let i=0;
    //console.log("Logo:",i++);
    return(
        <div>
        <Tilt className="Tilt br2 shadow-2 pa3 " options={{ max : 200 }} style={{ height: 200, width: 200 }} >
 <div className="Tilt-inner pa3"> <img alt='logo' src={brain}/> </div>
</Tilt>
        </div>
    )
}
export default Logo;