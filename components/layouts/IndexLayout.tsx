
import styled from 'styled-components';
import { Footer } from '../common/Footer';

//layouts 
//-head
//-profile excerpt 
//-projects



const Top = styled.div`
`
const FirstSection = styled.div`
  margin-bottom:3em;
`

const SecondSection = styled.div`

`
export const IndexLayout = ({
    children,
})=>{
    
    const [top,firstSec,secondSec,thirdSec] = children;



    return(
        <div className='index-layout-container'>
            <Top>{top}</Top>

            <FirstSection>{firstSec}</FirstSection>

            <SecondSection>{secondSec}</SecondSection>

            <div>{thirdSec}</div>
            <Footer/>
        </div>
    )
}