


import { ProjectSingleLayout } from "../layouts/ProjectSingleLayout"
import { ProjectsSection } from "../sections/projects/ProjectsSection"

import { Modal } from "../common/Modal";

export const ProjectsPage = ()=>{


    return(
      <>

      <Modal/>
      <ProjectSingleLayout>

        <ProjectsSection/>

      </ProjectSingleLayout>
      </>
    )
}