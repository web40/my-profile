import axios from 'axios';
import React, { useEffect,useState } from 'react';

import api from './api';



export const ProjectLoader = ({children})=>{

    const [projects,setProjects] = useState('');
    
/***********useEffect*******/
useEffect(()=>{
    const url  = `${api.url}/wp/v2/projects?_embed`;
    const token = api.token;
    const fetchProjects = async()=>{
      
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const config = {
            headers:headers
        }
        
        try{
            const response = await axios.get(url,config);
            setProjects(response.data)
            
        }catch(e){console.log(e)}


        const mresponse = await axios.get(`${api.url}/wp/v2/settings/`,config)

        console.log(mresponse.data)

    }
    
    fetchProjects();

    
},[]);



/*******render************/
return(
    <>
     {React.Children.map(children,child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child,{projects});
        }

        return child;
     })}

  


    </>
)


}