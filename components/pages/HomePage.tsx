import { IndexLayout } from "../layouts/IndexLayout"
import { Header } from "../common/Header";
import { Profile } from "../Profile"
import { HomeProjectSection } from "../partials/home/HomeProjectSection";





export const HomePage = ()=>{

 return (
   
    <IndexLayout>
        <Header/>

        <Profile/>

        <HomeProjectSection/>


    </IndexLayout>
 )
}