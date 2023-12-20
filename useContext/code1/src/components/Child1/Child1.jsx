import { useContext } from "react";
import { Parent1Context } from "../Parent1/Parent1";

const Child1 = () => {
	const inputContext1 = useContext(Parent1Context);

	const MsgBox = {
		width: 320,
		height: 100,
		backgroundColor: "gray",
		border: "1px solid white",
		marginTop: "20px",
	};

	const textColor = {
		color: "white",
		textAlign: "left",
	};
	return (
		<div className="Child1" style={MsgBox}>
			{inputContext1.showParentMsg && (
				<div>
					<h2>Child 1</h2>
					<p style={textColor}>{inputContext1.parentInput}</p>
				</div>
			)}
		</div>
	);
};

export default Child1;
