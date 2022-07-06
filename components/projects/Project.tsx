

import {v4 as uuid} from 'uuid';
import Image from 'next/image';


import ClickSvgImg from '../../public/icons/click.svg';
import { arch } from 'os';
export const Project = ({project,key})=>{
   
    const {acf,_embedded} = project || {}

    return(

        <>
          {project && 
            <div className="proj" key={key}>
              <div className="proj-container">

                <div className="proj-imgoverlay">
                    <div className="proj-img">
                        <Image src="https://profile.kennethowusu.com/"+ _embedded['wp:feauredmedia'][0].link width="231px" height="125px"/>


                        <div className="proj-overlay">
                            <div className="proj-overlay-stack">
                                <span className="proj-stack">nextjs </span>
                                <span className="proj-stack">mocha</span>
                                <span className="proj-stack">namecheap</span>
                                <span className="proj-stack">jeskin</span>
                                <span className="proj-stack">wordpress</span>
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
            </div>
          }
        </>
    )
}