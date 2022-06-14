import React from "react";
import Arrow from "../images/Arrow";

const styles = {
	projectContainer:
		"w-full h-[220px] flex items-center border-b border-gray-600 hover:scale-x-105 transition-all",
	projectDetails: "h-full flex flex-col pl-10 justify-around ",
	projectTitle: "text-3xl text-pink-600",
	projectInfo: "text-xl",
	projectTech: "text-2xl",
};

const Project = ({ image, title, info, tech, github }) => {
	return (
		<div className={styles.projectContainer}>
			<img
				src={image}
				alt="projectImage"
				width={250}
				height={250}
				className="object-cover"
			/>
			<div className={styles.projectDetails}>
				<a
					href={github}
					target={"_blank"}
					rel="noreferrer"
					className="flex items-baseline"
				>
					<h3 className={styles.projectTitle}>{title}</h3>
					<Arrow className={"h-4 fill-pink-600 ml-2"} />
				</a>
				<p className={styles.projectInfo}>{info}</p>
				<p className={styles.projectTech}>Tech Stack: {tech}</p>
			</div>
		</div>
	);
};

export default Project;
