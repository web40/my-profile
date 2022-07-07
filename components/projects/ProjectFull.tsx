import {ProjectSingleLayout} from '../layouts/ProjectSingleLayout';
import Link from 'next/link';
import Image from 'next/image';
import {v4 as uuid} from 'uuid';

import { ProjectSingleContainer } from '../containers/ProjectSingleContainer';
import { detectContentType } from 'next/dist/server/image-optimizer';
import { ProjectSinglePageSkeleton } from '../skeleton/ProjectSinglePageSkeleton';

import RightCaretSvg from '../../public/icons/right-caret.svg';
import LinkNewTabSvg from '../../public/icons/link_new_tab.svg';
export const ProjectFull = ({project})=>{


const {acf,content} = project || {};

const {website,platform,stack,gallery} = acf || {};
return(
   <ProjectSingleLayout>
    

     {!project && <ProjectSinglePageSkeleton/>}
   
     <div className='projectBreadcrumb'>
          <span className='mr-2'><Link href='/'><a>Projects</a></Link></span>
          <span className='mr-2'><RightCaretSvg/></span>
          <span>{acf && acf.project_name}</span>
       
      </div>


      {content &&  (<div className="project-single-description" dangerouslySetInnerHTML={{__html:content.rendered}}>
      
      </div>)}

      <div className="project-single-info">
        <ul className="">
          {website && <li><span className="c-head">Website</span><span className='c-content'>
            <Link href={website}>
              <a className="website-link" target="_blank"><span className='mr-1'>{website}</span><span><LinkNewTabSvg/></span></a> 
              
            </Link></span>
            </li>}



          {platform && <li><span className="c-head">Platform</span> 
                        {platform.map(platformItem=> <span  className='c-content' key={uuid()}>{platformItem}, </span>)}
                      
                      </li>}
          
          
          {stack && <li><span className="c-head">stack</span> {stack.map(stackItem=> <span className='c-content' key={uuid()}>{stackItem}, </span>)}</li>}
          


        </ul>
      </div>

      <div className="project-single-images">
          {gallery && gallery.map(imageItem=>{


           return(<div key={uuid()}  className='mb-4'><Image src={imageItem} width={850}height={478}/></div>)  

          } )}
      </div>
    
   
 

  </ProjectSingleLayout>
)
}