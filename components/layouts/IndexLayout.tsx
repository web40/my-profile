
import styled from 'styled-components';

//layouts 
//-head
//-profile excerpt 
//-projects

const Container = styled.div`
 padding:1.5em 1em;

 @media(min-width:950px){
    width:900px;
    margin:auto;
 }
  
`

const Top = styled.div`
  margin-bottom:1.5em;
`
const FirstSection = styled.div`

`

const SecondSection = styled.div`

`
export const IndexLayout = ({
    children,
})=>{
    
    const [top,firstSec,secondSec] = children;



    return(
        <Container>
            <Top>{top}</Top>

            <FirstSection>{firstSec}</FirstSection>

            <SecondSection>{secondSec}</SecondSection>
        </Container>
    )
}