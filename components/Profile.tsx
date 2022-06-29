import DownloadSvgImg from '../public/icons/download.svg';


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

            <button className="btn btn__primary btn__icon">
               <span className="btn-icon">
                <DownloadSvgImg/>
               </span>
               <span>Download Resume</span> 
            </button>

            </div>
        </div>
    )
}