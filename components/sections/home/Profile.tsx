
import axios from 'axios';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';


//===========components=====================//
import { ResumeLinkContainer } from '../../containers/ResumeLinkContainer';
import { OptionContainer } from '../../containers/OptionContainer';
import DownloadSvgImg from '../../../public/icons/download.svg';

/********Proifle Excerpt******/
const ProfileExcerpt =({option})=>{
    return(
        <>
        <p className="profile-excerpt">
            {!option ?
             <><Skeleton/><Skeleton/></>
             :
             option.profile_resume_link
            }
         </p>
        </>
    )
}


/*********ResumeLink******************/
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



/**********Profile*********************/
export const Profile = ()=>{

    return(
        <div className="profile">
            <div className="profile-container">

             <div className="profile-description">
                <h1 className="profile-name">Hi, {"I'm"} Kenneth!</h1>
                <h2 className="profile-title">Full Stack Web Developer</h2>
                <OptionContainer path="profile_summary">
                    <ProfileExcerpt/>
                </OptionContainer>
            </div>

            <ResumeLinkContainer>
                <ResumeLink/>
            </ResumeLinkContainer>


            </div>
        </div>
    )
}