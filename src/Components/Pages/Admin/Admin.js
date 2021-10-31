import React from "react";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import AddPackage from "../AddPackage/AddPackage";
import AddNews from "../AddNews/AddNews";
import AddKnowledge from "../AddKnowledge/AddKnowledge";
import AddComments from "../AddComments/AddComments";
import AddSlide from "../AddSlide/AddSlide";

const Admin = () => {
	return (
		<Container>
			<Tab.Container id='list-group-tabs-example' defaultActiveKey='#link1'>
				<div className='row'>
					<div className='col-md-3'>
						<ListGroup>
							<ListGroup.Item
								action
								href='#link1'
								className='border-11 text-color-1 fw-bold'>
								Add Package
							</ListGroup.Item>
							<ListGroup.Item
								action
								href='#link2'
								className='border-11 text-color-1 fw-bold'>
								Add News
							</ListGroup.Item>
							<ListGroup.Item
								action
								href='#link3'
								className='border-11 text-color-1 fw-bold'>
								Add Knowledge
							</ListGroup.Item>
							<ListGroup.Item
								action
								href='#link4'
								className='border-11 text-color-1 fw-bold'>
								Add Comments
							</ListGroup.Item>
							<ListGroup.Item
								action
								href='#link5'
								className='border-11 text-color-1 fw-bold'>
								Add Slides
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
							<Tab.Pane eventKey='#link5'>
								<AddSlide></AddSlide>
							</Tab.Pane>
						</Tab.Content>
					</div>
				</div>
			</Tab.Container>
		</Container>
	);
};

export default Admin;
