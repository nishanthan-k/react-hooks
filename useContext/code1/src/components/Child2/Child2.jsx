import { useContext } from "react";
import { Parent1Context } from "../Parent1/Parent1";

const Child2 = () => {
	const inputContext1 = useContext(Parent1Context);

	const MsgBox = {
		width: 320,
		height: 100,
		backgroundColor: "red",
		border: "1px solid white",
		marginTop: "20px",
	};

	const textColor = {
		color: "white",
		textAlign: "left",
	};
	return (
		<div className="Child2" style={MsgBox}>
			{inputContext1.showParentMsg && (
				<div>
					<h2>Child 2</h2>
					<p style={textColor}>{inputContext1.parentInput}</p>
				</div>
			)}
		</div>
	);
};

export default Child2;
