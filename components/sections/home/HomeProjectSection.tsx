
import styled from 'styled-components';
import { ProjectLoader } from '../../containers/ProjectsContainer';
import { Project} from "../../projects/Project";

import { ProjectList } from '../../projects/ProjectList';



const ProjectContainer = styled.div`
 display:grid;
 grid-template-columns:repeat(1,auto);
 row-gap:35px;
 @media(min-width:500px){
    grid-template-columns:repeat(2,230px);
    grid-gap:25px;
 }


    
`;

export const HomeProjectSection  = ()=>{


    return(
        <>
            <h2 className="section-head">Projects</h2>

            <ProjectLoader>
             <ProjectList />   
           </ProjectLoader>
          
        </>
    )
}