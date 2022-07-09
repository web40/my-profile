import { IndexLayout } from "../layouts/IndexLayout"
import { Header } from "../common/Header";
import { Profile } from "../sections/home/Profile"
import { ProjectSection } from "../sections/home/ProjectSection";





export const HomePage = ()=>{

 return (
   
    <IndexLayout>
        <Header/>

        <Profile/>

        <ProjectSection/>


    </IndexLayout>
 )
}