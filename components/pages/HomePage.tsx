import { IndexLayout } from "../layouts/IndexLayout"
import { Header } from "../Header";
import { Profile } from "../Profile"
import { Project } from "../projects/Project";
import { HomeProjectSection } from "../sections/home/HomeProjectSection";
import { ProjectList } from "../projects/ProjectList";


import { ProjectLoader } from "../containers/ProjectsContainer";


export const HomePage = ()=>{

 return (
   
    <IndexLayout>
        <Header/>

        <Profile/>

        <HomeProjectSection/>


    </IndexLayout>
 )
}