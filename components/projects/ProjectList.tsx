
import {v4 as uuid} from 'uuid';
import styled from 'styled-components';
import { ProjectLoader } from '../containers/ProjectsContainer';
import { Project} from "./Project";

const ProjectContainer = styled.div`
 display:grid;
 grid-template-columns:repeat(1,auto);
 row-gap:35px;
 @media(min-width:500px){
    grid-template-columns:repeat(2,230px);
    grid-gap:25px;
 }


    
`;

export const ProjectList  = ({projects})=>{

    console.log(projects)
    return(
        <>
           
           <ProjectContainer>
           {projects && projects.map(project=>{ 
             
               return (<div>
                        <Project project={project} key={uuid()}/>
                      </div>)
             

            })}

          </ProjectContainer>
        </>
    )
}













