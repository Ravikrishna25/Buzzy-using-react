import React from "react";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInOutContainer from "./containers";
import Home from "./home";
import ResponsiveAppBar from "./Navbar"

import Flashcard from "./Flashcard";

function App() {
	return (
		<div>
			
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignInOutContainer />} />
					<Route path="/home" element={<Home />} />
					<Route path="/flash" element={<Flashcard />} />

				</Routes>
			</BrowserRouter>
		</div>
		// <div className="App">
		//  <SignInOutContainer/>
		// </div>
	);
}

export default App;
