

import Link from 'next/link';
import styled from 'styled-components';





/*================components=====================*/
import { ProjectsContainer } from '../../containers/ProjectsContainer';
import { ProjectList } from '../../projects/ProjectList';
import RightCaretSvg from '../../../public/icons/right-caret.svg';

const ProjectContainer = styled.div`
 display:grid;
 grid-template-columns:repeat(1,auto);
 row-gap:35px;
 @media(min-width:500px){
    grid-template-columns:repeat(2,230px);
    grid-gap:25px;
 }


    
`;


const RightCaretContainer = styled.span`
 display:flex;
 justify-content:center;
 align-items:center;
 margin-left:6px;
 svg{
    width:5px;
    fill:#fff;
    stroke:#fff;
    path{
       stroke-width:20;
    }
 }
`
export const ProjectSection  = ()=>{


    return(
        <>
            <h2 className="section-head">Projects</h2>
            
            <div className='mb-6'>
                <ProjectsContainer categories={19} order="asc">
                    <ProjectList/>   
                </ProjectsContainer>
            </div>
    

           <Link href="/projects">
            <a className='btn btn__primary flex items-center'>
                <span>More Projects</span>
                <RightCaretContainer><RightCaretSvg/></RightCaretContainer>
            </a>
            </Link>
          
        </>
    )
}