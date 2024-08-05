import { Button, Container } from "react-bootstrap";

export default function Home() {
	return (
		<>
			<div>Here I use React carousel</div>
			<div>
				<h3 className="text-center bg-white py-1">My Service</h3>
				<Container>
					<div className="d-flex justify-content-between">
						<Button
							style={{
								width: "45%",
								borderRadius: "30px",
							}}
						>
							<i className="fa fa-question-circle"></i> Help
						</Button>
						<Button
							style={{
								width: "45%",
								borderRadius: "30px",
							}}
						>
							<i className="fa-solid fa-user-headset"></i>
							Contact Service
						</Button>
					</div>
				</Container>
			</div>
			<div>Here I use React carousel</div>
		</>
	);
}
