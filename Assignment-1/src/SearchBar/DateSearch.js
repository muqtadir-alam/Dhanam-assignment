import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import moment from 'moment';
export const DateSearch = props => {
	var date = new Date();

	const yesterdate = moment(date.setDate(date.getDate() - 1)).format(
		'YYYY-MM-DD'
	);

	const lastWeek = moment(date.setDate(date.getDate() - 6)).format(
		'YYYY-MM-DD'
	);

	const lastMonth = moment(date.setDate(date.getDate() - 29)).format(
		'YYYY-MM-DD'
	);
	// let yesterday = moment().subtract(1, 'day').toDate()

	const dateData = [
		{ id: yesterdate, value: 'yesterday' },
		{ id: lastWeek, value: 'last week' },
		{ id: lastMonth, value: 'last month' },
	];

	// date ; //# => Thu Mar 31 2011 11:14:50 GMT+0200 (CEST)
	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant='success' id='dropdown-basic'>
					Select date
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{dateData &&
						dateData?.map(data => {
							console.log('this is data', data);

							return (
								<Dropdown.Item onClick={e => props.setDateFilter(data.id)}>
									{data.value}
								</Dropdown.Item>
							);
						})}
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};
