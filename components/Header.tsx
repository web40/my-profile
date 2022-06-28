import Link from 'next/link';


import AvatarImg from '../public/images/avatar.svg';
export const Header = ()=>{

    return(
        
        <div className="header">
            <div className='header-container'>
                <div className="avatar">
                    <AvatarImg/>
                </div>

                <ul className="header-nav">
                    <li className="header-nav-li"><Link href="/projects"><a>Projects</a></Link></li>
                    <li className="header-nav-li"><Link href="/Github"><a>Github</a></Link></li>
                    <li className="header-nav-li"><Link href="/message"><a>Message</a></Link></li>
                </ul>

            </div>
        </div>
    )
}