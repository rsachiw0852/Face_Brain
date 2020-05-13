import React from 'react';
import './ImageLinkForm.css';
import 'tachyons';
const ImageLinkForm=({onInputChange,onSubmit})=>{
    //let i=0;
    //console.log("ImageLinkForm:",i++);
    return(
        <div>
        <p>This Magic Frame Brain will detect face in your Pictures.</p>
        <div className='center'>
        <div className=' center form pa3 br2 shadow-5'>
        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
        <button onClick={onSubmit} className='w-30  f4 grow link ph3 pv2 dib white bg-light-purple '>Detect</button>
        </div>
        </div>
        </div>
    )
}
export default ImageLinkForm;