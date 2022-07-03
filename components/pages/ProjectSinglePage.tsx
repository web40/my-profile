import {ProjectSingleLayout} from '../layouts/ProjectSingleLayout';
import Link from 'next/Link';
import Image from 'next/image';
export const ProjectSinglePage = ()=>{
return(
   <ProjectSingleLayout>
    

   <div className='projectBreadcrumb'>
      <span className='mr-2'><Link href='/'><a>Projects</a></Link></span>
      <span className='mr-2'>&#62;</span>
      <span>rottpass</span>
   </div>


   <div className="project-single-description">
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also
     the leap into electronic typesetting, remaining essentially unchanged.
   </div>

   <div className="project-single-info">
     <ul className="">
       <li><span>Website</span><span>dsd</span></li>
       <li><span>Platform</span><span>sds</span></li>
       <li><span>stack</span><span>sd</span></li>
       <li><span>Platform</span><span>sd</span></li>


     </ul>
   </div>

   <div className="project-single-images">
      <div className='mb-4'>
        <Image src="/images/shot1.png" width={1500}height={1200}/>
      </div>
      <div>
      <Image className='mb-4' src="/images/shot1.png" width={1500}height={1200}/>
      </div>
   </div>


  </ProjectSingleLayout>
)
}