
import styled from 'styled-components';
import { Header } from '../Header';
//layouts 
//-head
//-profile excerpt 
//-projects

const Container = styled.div`
 padding:1.5em 1em;

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
        <Container>
           <Header/> 
           {children}
        </Container>
    )
}