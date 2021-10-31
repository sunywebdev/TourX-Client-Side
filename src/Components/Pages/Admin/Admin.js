import React from "react";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import AddPackage from "../AddPackage/AddPackage";
import AddNews from "../AddNews/AddNews";
import AddKnowledge from "../AddKnowledge/AddKnowledge";
import AddComments from "../AddComments/AddComments";

const Admin = () => {
	return (
		<Container>
			<Tab.Container id='list-group-tabs-example' defaultActiveKey='#link1'>
				<div className='row'>
					<div className='col-md-3'>
						<ListGroup>
							<ListGroup.Item action href='#link1'>
								Add Package
							</ListGroup.Item>
							<ListGroup.Item action href='#link2'>
								Add News
							</ListGroup.Item>
							<ListGroup.Item action href='#link3'>
								Add Knowledge
							</ListGroup.Item>
							<ListGroup.Item action href='#link4'>
								Add Comments
							</ListGroup.Item>
						</ListGroup>
					</div>
					<div className='col-md-9'>
						<Tab.Content>
							<Tab.Pane eventKey='#link1'>
								<AddPackage></AddPackage>
							</Tab.Pane>
							<Tab.Pane eventKey='#link2'>
								<AddNews></AddNews>
							</Tab.Pane>
							<Tab.Pane eventKey='#link3'>
								<AddKnowledge></AddKnowledge>
							</Tab.Pane>
							<Tab.Pane eventKey='#link4'>
								<AddComments></AddComments>
							</Tab.Pane>
						</Tab.Content>
					</div>
				</div>
			</Tab.Container>
		</Container>
	);
};

export default Admin;
