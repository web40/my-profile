import axios from 'axios';
import React, { useEffect,useState } from 'react';

import api from './api';



export const ResumeLinkContainer = ({children})=>{

    const [resumeUrl,setResumeUrl] = useState('');
    
/***********useEffect*******/
useEffect(()=>{
    const url  = `${api.url}/profile/v1/options/profile_resume_url`;
    const token = api.token;



    const getResponse = async()=>{
      
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const config = {
            headers:headers
        }
        
        try{
            const response = await axios.get(url,config);
            setResumeUrl(response.data)
        }catch(e){console.log(e)}


       

      

    }
    
    getResponse();

    
},[]);



/*******render************/
return(
    <>
     {React.Children.map(children,child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child,{resumeUrl});
        }

        return child;
     })}

  


    </>
)


}