
import styled from 'styled-components';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
//layouts 
//-head
//-profile excerpt 
//-projects

const Container = styled.div`
min-height:100vh;
padding:1.5em 1em 0 1em;
display:flex;
flex-direction:column;

 @media(min-width:900px){
    width:850px;
    margin:auto;
 }
  
`

const ProjectBreadcrumb = styled.div`
  margin-top:1.5em;
`

export const ProjectSingleLayout = ({
    children,
})=>{
    
    



    return(
        <div className='index-layout-container'>
           <Header/> 
           {children}
           <Footer/>
        </div>
    )
}