import axios from 'axios';
import React, { useEffect,useState } from 'react';

import api from './api';



export const OptionContainer = ({children,path})=>{

    const [option,setOption] = useState('');
    
/***********useEffect*******/
useEffect(()=>{

   
    const url  = `${api.url}/profile/v1/options/${path}`;
    const token = api.token;
  




    const getResponse = async()=>{
      
        const headers = {
            Authorization:`Bearer ${token}`
        }
        const config = {
            headers:headers
        }
        
        try{
            
            const response = await axios({
                url,
                method:'get',
                headers:headers,
            })
            setOption(response.data)
        }catch(e){console.log(e)}


       

      

    }
    
    getResponse();

    
},[]);



/*******render************/
return(
    <>
     {React.Children.map(children,child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child,{option});
        }

        return child;
     })}

  


    </>
)


}