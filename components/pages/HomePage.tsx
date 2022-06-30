import { IndexLayout } from "../layouts/IndexLayout"
import { Header } from "../Header";
import { Profile } from "../Profile";
import { Project } from "./Project";
import { HomeProjectSection } from "../sections/HomeProjectSection";
export const HomePage = ()=>{

 return (
   
    <IndexLayout>
        <Header/>
        <Profile/>
        <HomeProjectSection/>
        
    </IndexLayout>
 )
}