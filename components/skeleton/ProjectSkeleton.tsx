import { randomUUID } from "crypto";
import Skeleton  from "react-loading-skeleton";
import styled from 'styled-components';

import {v4 as uuid} from 'uuid';
const Container = styled.div`

`
export const ProjectSkeleton = ({count=1})=>{
    return Array(count)
    .fill(0)
    .map((item,i)=>{



    
 
      return (


            <Container key={uuid()}>
              <Skeleton height={137}/>
              <Skeleton width="30%"/>
              <Skeleton/>
            </Container>
 
    )
    })

}