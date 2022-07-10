import {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';



import AvatarImg from '../../public/images/avatar.svg';
import { Modal } from './Modal';

export const Header = ()=>{
    
    const [shouldShowModal,setShouldShowModal] = useState(false)
    const router = useRouter();
    const {pathname} = router;

    return(
        <>
        <div className="header">
            <div className='header-container'>
                <Link href='/'>
                   <a className="avatar" ><AvatarImg/></a>
                </Link>

                <ul className="header-nav">
                    <li className="header-nav-li"><Link href="/projects"><a className={pathname == "/projects" ? "active" : undefined}>Projects</a></Link></li>
                    <li className="header-nav-li"><Link href="https://github.com/kenpl44"><a target="_blank">Github</a></Link></li>
                    <li className="header-nav-li"><button onClick={()=>setShouldShowModal(!shouldShowModal)}>Message</button></li>
                </ul>

            </div>
        </div>

        <Modal shouldShow={shouldShowModal} onRequestClose={()=>setShouldShowModal(!shouldShowModal)}/>

        </>
    )
}