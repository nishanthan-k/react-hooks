import React, { useState } from "react";
import Child1 from "../Child1/Child1";
import Child2 from "../Child2/Child2";
import ParentProvider from "../InputContext/InputContext"

export const Parent1Context = React.createContext();

const Parent1 = () => {
	const [parentInput, setParentInput] = useState("");
	const [showParentMsg, setShowParentMsg] = useState(false);

  const handleInputChange = (e) => {
    setParentInput(e.target.value);
    setShowParentMsg(false);
  }

	const handleShow = () => {
		if (parentInput !== "") {
      setShowParentMsg(!showParentMsg);
    } else {
      window.alert("Enter the Message");
    }
	};
	return (
		<div className="Parent1">
			<label htmlFor="parent1-input">Message from Parent 1 : </label>
			<input
				type="text"
				value={parentInput}
				onChange={(e) => handleInputChange(e)}
			/>
			<button onClick={handleShow}>Show Msg</button>

			<ParentProvider>
				<Child1 />
				<Child2 />
			</ParentProvider>
		</div>
	);
};

export default Parent1;
