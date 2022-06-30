import Image from 'next/image';


import ClickSvgImg from '../../public/icons/click.svg';
export const Project = ()=>{


    return(

        <>
            
            <div className="proj">
              <div className="proj-container">

                <div className="proj-imgoverlay">
                    <div className="proj-img">
                        <Image src="/images/portfolio1.png" width="231px" height="125px"/>
                    </div>

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
                <div className="proj-desc">
                    <div className="proj-desc-title">rottpass</div>
                    <div className="proj-desc-excerpt">A password manager web application</div>
                </div>

              </div>
            </div>
        </>
    )
}