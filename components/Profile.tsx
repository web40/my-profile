import DownloadSvgImg from '../public/icons/download.svg';
import axios from 'axios';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { ResumeLinkContainer } from './containers/ResumeLinkContainer';



const ResumeLink = ({resumeUrl})=>{
    const fileName = 'CV_CoverLetter_Kenneth.pdf';
   
    
  return(


    <>
 
        
    {!resumeUrl ?  <Skeleton height={40} width={197}/>:


    (<Link href={resumeUrl.profile_resume_link}>            
                 <a  className="btn btn__primary" download={fileName} rel="nofollow">
                       
                            <span className="btn-icon">
                            <DownloadSvgImg/>
                        </span>
                        <span>Download Resume</span> 
                    </a>
                  
     </Link>)}

     </>
  );
      
  
}




export const Profile = ()=>{

    return(
        <div className="profile">
            <div className="profile-container">

             <div className="profile-description">
                <h1 className="profile-name">Hi, Kenneth here!</h1>
                <h2 className="profile-title">Full Stack Web Developer</h2>
                <p className="profile-excerpt">
                    Welcome to my digital garden where I share what I'm learning about shipping great products, 
                        becoming a better developer and growing a career in tech.
                </p>
            </div>

            <ResumeLinkContainer>
                <ResumeLink/>
            </ResumeLinkContainer>


            </div>
        </div>
    )
}