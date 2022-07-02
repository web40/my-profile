import DownloadSvgImg from '../public/icons/download.svg';
import axios from 'axios';
import Link from 'next/link';
export const Profile = ()=>{
    const fileLink = 'https://woopos.3megabyte.com/wp-content/uploads/2022/07/EDVP.pdf';
    const fileName = 'CV_CoverLetter_Kenneth.pdf';

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
            <Link href={fileLink} download={fileName}>
        
                <a  className="btn btn__primary" download={fileName}>
                    
                        <span className="btn-icon">
                        <DownloadSvgImg/>
                    </span>
                    <span>Download Resume</span> 
                </a>
            </Link>


            </div>
        </div>
    )
}