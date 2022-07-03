import Link from 'next/link';


import AvatarImg from '../public/images/avatar.svg';
export const Header = ()=>{

    return(
        
        <div className="header">
            <div className='header-container'>
                <Link href='/'>
                   <a className="avatar" ><AvatarImg/></a>
                </Link>

                <ul className="header-nav">
                    <li className="header-nav-li"><Link href="/projects"><a>Projects</a></Link></li>
                    <li className="header-nav-li"><Link href="https://github.com/kenpl44"><a target="_blank">Github</a></Link></li>
                    <li className="header-nav-li"><Link href="/message"><a>Message</a></Link></li>
                </ul>

            </div>
        </div>
    )
}