import React from 'react';
import style from './index.css';
import { Card } from 'react-bootstrap';

function SingleCard({ date, notes, title, bunting }) {
	return (
		<>
			<Card border='success' style={{ width: '18rem', margin: '1rem' }}>
				<Card.Header> {date} </Card.Header>
				<Card.Body>
					<Card.Title>{title} </Card.Title>
					<Card.Text>{notes}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

export default SingleCard;
