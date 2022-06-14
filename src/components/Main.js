import React from "react";
import profile from "../images/profile.jpg";
import Linkedin from "../images/Linkedin";
import Github from "../images/Github";
import Mail from "../images/Mail";
import Twitter from "../images/Twitter";

const styles = {
	container:
		" w-full bg-gradient-to-r from-black to-gray-900 flex items-center min-h-screen h-screen ",
	imageContainer: "w-1/2 h-full flex justify-center items-center",
	imageWrapper:
		"w-[400px] h-[400px] flex justify-center items-center border-[15px] shadow-xl shadow-pink-600/50 border-pink-600 rounded-[50%] overflow-hidden hover:scale-105 transition-all ",
	bioContainer: "h-full flex flex-col justify-center w-[40%] gap-5",
	title: "text-pink-600 text-6xl font-serif font-medium hover:scale-105 hover:translate-x-4 transition-all",
	about: "text-white text-3xl leading-snug",
	profileIcon: "h-8 fill-white w-10 mx-4  stroke-2",
	profileIcons: "flex justify-center items-center mt-2",
	linkedin: "h-8 fill-white w-10 mx-4 hover:fill-blue-400",
	github: "h-8 fill-white w-10 mx-4 hover:fill-emerald-400",
	twitter: "h-8 fill-white w-10 mx-4 hover:fill-cyan-400",
	buttonBox: "flex justify-evenly items-center gap mt-2 ",
	button: "bg-white text-center text-pink-600 px-10 py-2 rounded-xl border-2 border-pink-600 hover:bg-pink-600 hover:text-white shadow-md shadow-pink-600/50 transition-all",
};

const Main = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<div className={styles.imageWrapper}>
					<img src={profile} className="object-cover" />
				</div>
			</div>
			<div className={styles.bioContainer}>
				<p
					className={styles.title}
					style={{ textShadow: "2px 2px rgb(136 19 55)" }}
				>
					Hi There!
				</p>
				<p
					className={styles.about}
					style={{ textShadow: "1px 1px #000" }}
				>
					I am Baibhav Prasad, a final year B-tech student at IIIT
					Bhubaneswar. I am a FullStack Developer. Presently I am
					learing technologies around web3 and aspire to be a
					FullStack Blockchain developer.
				</p>
				<div className={styles.profileIcons}>
					<Mail className={styles.profileIcon} />
					<a
						href="https://www.linkedin.com/in/baibhav1314/"
						target={`_blank`}
					>
						<Linkedin className={styles.linkedin} />
					</a>
					<a href="https://github.com/baibhav1314" target={`_blank`}>
						<Github className={styles.github} />
					</a>
					<a
						href="https://twitter.com/prasad_baibhav"
						target={`_blank`}
					>
						<Twitter className={styles.twitter} />
					</a>
				</div>
				<div className={styles.buttonBox}>
					<a
						href="https://drive.google.com/file/d/1da1jRblI_clrYhAU-hx1aZk2qsLIwco6/view?usp=sharing"
						target={"_blank"}
						className={styles.button}
					>
						Resume
					</a>
					<a href="" target={"_blank"} className={styles.button}>
						Projects
					</a>
				</div>
			</div>
		</div>
	);
};

export default Main;
