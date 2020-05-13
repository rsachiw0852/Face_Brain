import React from 'react';

const Navigation=({onRouteChange,isSignedIn})=>{

    if(isSignedIn){
        return(
            <nav style={{display:'flex' ,justifyContent:'flex-end'}}>
        <p onClick={()=>onRouteChange('SignIn')} className='f3 link din black underline pa3 pointer'>Sign Out</p>
        </nav>
        )
    }else{
    return(
        <nav style={{display:'flex' ,justifyContent:'flex-end'}}>
        <p onClick={()=>onRouteChange('SignIn')} className='f3 link din black underline pa3 pointer'>Sign Out</p>
        <p onClick={()=>onRouteChange('Register')} className='f3 link din black underline pa3 pointer'>Register</p>
        </nav>
    )
    }
}
export default Navigation;