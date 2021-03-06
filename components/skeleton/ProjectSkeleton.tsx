import { randomUUID } from "crypto";
import Skeleton  from "react-loading-skeleton";
import styled from 'styled-components';

import {v4 as uuid} from 'uuid';
const Container = styled.div`

`

const Content = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 text-align:center;
`;
export const ProjectSkeleton = ({count=1})=>{
    return Array(count)
    .fill(0)
    .map((item,i)=>{



    
 
      return (


            <Container key={uuid()}>
              <Skeleton height={137} className="mb-4"/>
              <Content>
                <Skeleton width="40%" className="mb-4"/>
                <Skeleton width="90%"/>
                <Skeleton width="60%"/>
              </Content>
             
            </Container>
 
    )
    })

}