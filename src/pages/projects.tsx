import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import Footer from "../components/common/fotter";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
	
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="flex flex-col h-full m-0 pt-[120px]">
						<div className="title !w-full">
							Principais projetos do meu GitHub:
						</div>

						<div className="pt-10">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
