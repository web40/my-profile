
import Link from 'next/Link';


import NotFoundSvg from '../public/icons/page-not-found.svg';



const NotFoundPage = ()=>{
return(
 <div className=''>
      <div className='container-404'>
        <h1 className='head-notfound'>Oh Ah! Page Not Found </h1>
        <div className="img-404">
            <NotFoundSvg/>
        </div>
        <Link href="/"><a className="link-404">Go To Home</a></Link>
      </div>
 </div>
)
}


export default NotFoundPage;