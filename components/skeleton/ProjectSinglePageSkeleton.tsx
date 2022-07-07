import Skeleton from "react-loading-skeleton";
import styled from 'styled-components'

const Container = styled.div`
 .seperate{
    margin-bottom:1.5em;
 }
`

const BreadCrumb = styled.div`
margin-bottom:1em;
width:20%;
`

const Content = styled.div`
margin-bottom:1.5em;
`

const Info = styled.div`
margin-bottom:2em;
`

const Gallery = styled.div`

`
export const ProjectSinglePageSkeleton = ()=>{

    return(
        <>
         <Container>

            <BreadCrumb>
                <Skeleton/>
            </BreadCrumb>
            

            <Content>
                <Skeleton />
                <Skeleton />
                <Skeleton width="70%"/>
            </Content>


            <Info>
                <Skeleton width="30%" count={3}/>
                
            </Info>


            <Gallery>
                <Skeleton width="100%" height="300px" count={3} className="seperate"/>
            </Gallery>
        
         </Container>
       
        </>
    )
}