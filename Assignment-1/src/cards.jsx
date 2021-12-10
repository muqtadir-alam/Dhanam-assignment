import React, { useState, useEffect } from 'react';
import SingleCard from './card';
import moment from 'moment';
import DateRangepicker from './SearchBar/DateRangepicker';

import { getdata } from './Redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from './SearchBar/SelectBar';
import { DateSearch } from './SearchBar/DateSearch';
function Cards() {
	const home = useSelector(state => state.home);
	const apiDataList = home?.apiDatList;
	const initialData = apiDataList?.scotland?.events;

	const [FilterData, setFilterData] = useState([]);
	const [Division, setDivision] = useState();
	const [DateFilter, setDateFilter] = useState(initialData);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getdata());
	}, []);

	console.log('this is data', FilterData);
	useEffect(() => {
		if (Division === apiDataList?.['northern-ireland'].division) {
			const northernireland = apiDataList?.['northern-ireland']?.events;

			setFilterData(northernireland);
		} else if (Division === apiDataList?.['england-and-wales'].division) {
			const englandwales = apiDataList?.['england-and-wales']?.events;
			setFilterData(englandwales);
		} else if (Division === apiDataList?.scotland?.division) {
			const scotland = apiDataList?.scotland?.events;
			setFilterData(scotland);
		}
	}, [Division]);

	return (
		<>
			<h1 className='heading'>BANK holidays</h1>
			<div className='searchBar'>
				<div style={{ margin: '3px' }}>
					<SearchBar setDivision={setDivision} apiDataList={apiDataList} />
				</div>
				{/* <DateSearch setDateFilter={setDateFilter} /> */}

				<div style={{ margin: '3px' }}>
					<DateRangepicker setDateFilter={setDateFilter} />
				</div>
			</div>

			<div className='searchBar'>
				{Division !== undefined ? <h3>{Division}</h3> : ''}
			</div>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					margin: 'auto',
				}}>
				{apiDataList &&
				FilterData &&
				FilterData.filter(a => {
					const apiDate = new Date(a.date);

					var endDate = DateFilter[1];

					var startDate = DateFilter[0];

					if (endDate === undefined && startDate === undefined) {
						return a;
					} else {
						return apiDate >= startDate && apiDate <= endDate;
					}
				}).length !== 0 ? (
					FilterData.filter(a => {
						const apiDate = new Date(a.date);

						var endDate = DateFilter[1];

						var startDate = DateFilter[0];

						if (endDate === undefined && startDate === undefined) {
							return a;
						} else {
							return apiDate >= startDate && apiDate <= endDate;
						}
					}).map(data => {
						return (
							<>
								{data !== undefined ? (
									<>
										<SingleCard
											date={data.date}
											notes={data.notes}
											title={data.title}
											bunting={data.bunting}
										/>
									</>
								) : (
									<div>no data fund</div>
								)}
							</>
						);
					})
				) : FilterData === undefined ? (
					<>
						<div>Please Select division</div>
					</>
				) : (
					<div>no data fund</div>
				)}
			</div>
		</>
	);
}
export default Cards;
