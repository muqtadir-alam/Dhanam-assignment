import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export const SearchBar = props => {
	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant='success' id='dropdown-basic'>
					division
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{props.apiDataList &&
						Object?.keys(props.apiDataList)?.map(data => {
							return (
								<Dropdown.Item onClick={e => props.setDivision(data)}>
									{data}
								</Dropdown.Item>
							);
						})}
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};
