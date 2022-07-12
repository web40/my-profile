import axios from 'axios';
import React, { useEffect,useState } from 'react';
import {useRouter} from 'next/router';





import api from './api';



export const ProjectContainer = ({children})=>{

    const [project,setProject] = useState('');
    
    /**********get project slug for api***/
    const router = useRouter();
    const slug = router.query['project-single'];

    
/***********useEffect*******/
useEffect(()=>{
    const url  = `${api.url}/wp/v2/projects?_embed`;
    const headers = api.headers;
    const fetchProjects = async()=>{
        
        const params = {
            slug:slug,
            acf_format:'standard',
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