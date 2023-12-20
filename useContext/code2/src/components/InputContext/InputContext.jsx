import React from "react";
import { useState, useContext } from "react";

export const ParentContext = React.createContext();
const ParentContextUpdate = React.createContext();

const ParentProvider = ({ children }) => {
	const [parentInput, setParentInput] = useState("");
	const [showParentMsg, setShowParentMsg] = useState(false);

	const handleInputChange = (e) => {
		setParentInput(e.target.value);
		setShowParentMsg(false);
	};

	const handleShow = () => {
		if (parentInput !== "") {
			setShowParentMsg(!showParentMsg);
		} else {
			window.alert("Enter the Message");
		}
	};

	return (
		<ParentContext.Provider value={{ parentInput, showParentMsg }}>
			<ParentContextUpdate>{children}</ParentContextUpdate>
		</ParentContext.Provider>
	);
};

export default ParentProvider;
