import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</div>
	);
}

export default App;
