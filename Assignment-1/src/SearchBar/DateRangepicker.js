import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'rsuite';

import { startOfDay, endOfDay, addDays, subDays } from 'date-fns';

const styles = { width: 260, display: 'block', marginBottom: 10 };

const Ranges = [
	{
		label: 'today',
		value: [startOfDay(new Date()), endOfDay(new Date())],
	},
	{
		label: 'yesterday',
		value: [
			startOfDay(addDays(new Date(), -1)),
			endOfDay(addDays(new Date(), -1)),
		],
	},
	{
		label: 'last7Days',
		value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
	},
	{
		label: 'last30Days',
		value: [startOfDay(subDays(new Date(), 29)), endOfDay(new Date())],
	},
];

const DateRangepicker = props => {
	const [value, setValue] = React.useState([]);

	useEffect(() => {
		props.setDateFilter(value);
	}, [value]);

	return (
		<>
			<DateRangePicker
				ranges={Ranges}
				size='md'
				placeholder='Select date Range'
				style={styles}
				value={value}
				onChange={setValue}
			/>
		</>
	);
};

export default DateRangepicker;
