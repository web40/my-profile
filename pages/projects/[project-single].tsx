import { ProjectSinglePage } from "../../components/pages/ProjectSinglePage";


export const getServerSideProps = async({params})=>{
    return{
        props:{params}
    }
}









const ProjectSingle = ({params})=>{
    const slug = params['project-single'];


    return(
        <>
        <ProjectSinglePage slug={slug}/>
        
        </>
    )
}

export default ProjectSingle;