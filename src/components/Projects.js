import React from "react";
import Project from "./Project";
import allProjects from "../lib/allProjects";
import ArrowLeft from "../images/ArrowLeft";
import { Link } from "react-router-dom";
const styles = {
	container:
		" w-full bg-gradient-to-r from-black to-gray-900 min-h-screen flex",
	projects: "max-w-screen-xl mx-auto text-white pt-5 flex flex-col",
	arrowLeft: "h-8 fill-pink-600 mr-2 ",
};

const Projects = () => {
	return (
		<div className={styles.container}>
			<div className={styles.projects}>
				<Link to={"/"}>
					<h2 className="text-4xl mb-10 text-pink-600 flex items-center">
						<ArrowLeft className={styles.arrowLeft} /> Projects
					</h2>
				</Link>
				{allProjects.map((item, index) => (
					<Project
						image={item.image}
						title={item.title}
						info={item.info}
						tech={item.tech}
						github={item.github}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
