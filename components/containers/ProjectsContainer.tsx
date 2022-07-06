import axios from 'axios';
import React, { useEffect,useState } from 'react';





export const ProjectLoader = ({children})=>{

    const [projects,setProjects] = useState('');
    
/***********useEffect*******/
useEffect(()=>{

    const fetchProjects = async()=>{
        const url = 'https://profile.kennethowusu.com/wp-json/wp/v2/projects?_embed';
        const token = 
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcHJvZmlsZS5rZW5uZXRob3d1c3UuY29tIiwiaWF0IjoxNjU3MDQyMzY4LCJuYmYiOjE2NTcwNDIzNjgsImV4cCI6MTY1NzY0NzE2OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pLkEX-m4iE2mxpzIpl10rCOdt01G_vrNBQ9RTTt8sCY"
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