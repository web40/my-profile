import {ProjectSingleLayout} from '../layouts/ProjectSingleLayout';
import Link from 'next/Link';
import Image from 'next/image';


import { ProjectSingleContainer } from '../containers/ProjectSingleContainer';
import { ProjectFull } from '../projects/ProjectFull';


export const ProjectSinglePage = ({slug})=>{

  
return(
  <ProjectSingleContainer slug={slug}>
     <ProjectFull/>
  </ProjectSingleContainer>
)
}