

import {v4 as uuid} from 'uuid';
import Image from 'next/image';
import Link from 'next/link';

import ClickSvgImg from '../../public/icons/click.svg';
import { arch } from 'os';
export const Project = ({project})=>{
   
    const {acf,_embedded,slug} = project || {}

    return(

        <>
          {project && 
          <Link href={`/projects/${slug}`}>
            <a className="proj" >
              <div className="proj-container">
              
                <div className="proj-imgoverlay">
                    <div className="proj-img">
                        <Image src={_embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url : '/images/shot1.png'} width="231px" height="125px"/>

                        {/* proj-overlay */}
                        <div className="proj-overlay">
                            <div className="proj-overlay-stack">

                                {acf.stack && acf.stack.map(stack=>{
                                 return <span className="proj-stack">{stack}</span>
      
                                })}
                         
                            </div>
                            <div className="proj-overlay-icon">
                                <ClickSvgImg/>
                            </div>
                        </div>

                    </div>

                   

                </div>
                <div className="proj-desc">
                    <div className="proj-desc-title">{acf.project_name}</div>
                    <div className="proj-desc-excerpt">{acf.project_small_details}</div>
                </div>

              </div>
            </a>
            </Link>
          }
        </>
    )
}