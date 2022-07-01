
import styled from 'styled-components';
import { Project} from "../pages/Project";

const ProjectContainer = styled.div`
 display:grid;
 grid-template-columns:repeat(1,auto);
 @media(min-width:500px){
    grid-template-columns:repeat(2,230px);
    grid-gap:25px;
 }


    
`;

export const HomeProjectSection  = ()=>{


    return(
        <>
            <h2 className="section-head">Projects</h2>

            <ProjectContainer>
                <div>
                    <Project/>
                </div>
                <div>
                    <Project/>
                </div>
                <div>
                    <Project/>
                </div>
                <div>
                    <Project/>
                </div>
               
            </ProjectContainer>
        </>
    )
}