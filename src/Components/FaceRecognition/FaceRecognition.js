import React from 'react';
import './FaceRecognition.css';

const FaceRecognition=({imageUrl,box})=>{
    //let i=0;
    //console.log("FaceRecognition:",i++);
    return(
        <div style={{marginLeft:'35%'}} className='tc center ma2'>
        <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} width='300px' height='auto'/>
        <div className='bounding_box' style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}>
        </div>
        </div>
        </div>
    )
}
export default FaceRecognition;