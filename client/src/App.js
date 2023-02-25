import React from "react";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import { Chat, Landing } from "./Pages";



const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/dialog" element={<Chat />} />
		</Routes>		
	</Router>

);

export default App;
