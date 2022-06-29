import { IndexLayout } from "../layouts/IndexLayout"
import { Header } from "../Header";
import { Profile } from "../Profile";

export const HomePage = ()=>{

 return (
   
    <IndexLayout>
        <Header/>
        <Profile/>
        <div></div>
    </IndexLayout>
 )
}