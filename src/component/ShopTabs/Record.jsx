import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function Record() {
	const [activeButton, setActiveButton] = useState("unfinished");
	return (
		<>
			<h3 className="text-center bg-white py-2">My Tasks</h3>
			<Container>
				<div className="d-flex justify-content-between">
					<Button
						style={{
							width: "45%",
							borderRadius: "30px",
							backgroundColor: activeButton === "unfinished" ? "blue" : "white",
							color: activeButton === "unfinished" ? "white" : "black",
						}}
						onClick={() => setActiveButton("unfinished")}
					>
						Unfinished
					</Button>
					<Button
						style={{
							width: "45%",
							borderRadius: "30px",
							backgroundColor: activeButton === "completed" ? "blue" : "white",
							color: activeButton === "completed" ? "white" : "black",
						}}
						onClick={() => setActiveButton("completed")}
					>
						Completed
					</Button>
				</div>
			</Container>
		</>
	);
}
