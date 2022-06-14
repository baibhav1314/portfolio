import React from "react";
import Project from "./Project";
import allProjects from "../lib/allProjects";

const styles = {
	container: " w-full bg-gradient-to-r from-black to-gray-900 min-h-screen ",
	projects: "max-w-screen-xl mx-auto text-white pt-5",
};

const Projects = () => {
	return (
		<div className={styles.container}>
			<div className={styles.projects}>
				<h2 className="text-4xl mb-10 text-pink-600">Projects</h2>
				{allProjects.map((item, index) => (
					<Project
						image={item.image}
						title={item.title}
						info={item.info}
						tech={item.tech}
						github={item.github}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
