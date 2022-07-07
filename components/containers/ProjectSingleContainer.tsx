import axios from 'axios';
import React, { useEffect,useState } from 'react';

import api from './api';



export const ProjectSingleContainer = ({children,slug})=>{

    const [project,setProject] = useState('');
    
/***********useEffect*******/
useEffect(()=>{
    const url  = `${api.url}/wp/v2/projects?_embed`;
    const token = api.token;
    const fetchProjects = async()=>{
        
        const params = {
            slug:slug,
            acf_format:'standard',
        }
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const config = {
            headers:headers
        }
        
        try{
            const response = await axios({
                url:url,
                method:'get',
                headers:headers,
                params:params

            })
            setProject(response.data[0])
       
            
        }catch(e){console.log(e)}
    }
    
    fetchProjects();

    
},[]);



/*******render************/
return(
    <>
     {React.Children.map(children,child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child,{project});
        }

        return child;
     })}

  


    </>
)


}