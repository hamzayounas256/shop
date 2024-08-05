import { Tab, Tabs } from "react-bootstrap";
import Record from "./ShopTabs/Record";
import Home from "./ShopTabs/Home";

export default function TabFunc() {
	return (
		<Tabs defaultActiveKey="home" fill>
			<Tab eventKey="home" title="Home">
				<Home />
			</Tab>
			<Tab eventKey="record" title="Record">
				<Record />
			</Tab>
			<Tab eventKey="match" title="Match">
				Tab content for Match
			</Tab>
			<Tab eventKey="team" title="Team">
				Tab content for Team
			</Tab>
			<Tab eventKey="profile" title="Profile">
				Tab content for Profile
			</Tab>
		</Tabs>
	);
}
