import {ProjectSingleLayout} from '../layouts/ProjectSingleLayout';
import Link from 'next/link';
import Image from 'next/image';
import {v4 as uuid} from 'uuid';

import { ProjectSingleContainer } from '../containers/ProjectSingleContainer';
import { detectContentType } from 'next/dist/server/image-optimizer';
import { ProjectSinglePageSkeleton } from '../skeleton/ProjectSinglePageSkeleton';


export const ProjectFull = ({project})=>{


const {acf,content} = project || {};

const {website,platform,stack,gallery} = acf || {};
return(
   <ProjectSingleLayout>
    

     {!project && <ProjectSinglePageSkeleton/>}
   
     <div className='projectBreadcrumb'>
          <span className='mr-2'><Link href='/'><a>Projects</a></Link></span>
          <span className='mr-2'>&#62;</span>
          <span>{acf && acf.project_name}</span>
       
      </div>


      {content &&  (<div className="project-single-description" dangerouslySetInnerHTML={{__html:content.rendered}}>
      
      </div>)}

      <div className="project-single-info">
        <ul className="">
          {website && <li><span>Website</span><span>{website}</span></li>}



          {platform && <li><span>Platform</span> 
                        {platform.map(platformItem=> <span key={uuid()}>{platformItem}, </span>)}
                      
                      </li>}
          
          
          {stack && <li><span>stack</span> {stack.map(stackItem=> <span key={uuid()}>{stackItem}</span>)}</li>}
          


        </ul>
      </div>

      <div className="project-single-images">
          {gallery && gallery.map(imageItem=>{


           return(<div key={uuid()}  className='mb-4'><Image src={imageItem} width={1920}height={1280}/></div>)  

          } )}
      </div>
    
   
 

  </ProjectSingleLayout>
)
}