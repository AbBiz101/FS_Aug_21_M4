import React from 'react';
import ChartBar from './ChartBar';
export default function Chart(props) {
	return (
		<div className="chart">
			{props.dataPoints.map((datapoint) => (
				<ChartBar
					key={datapoint.label}
					maxVal={null}
					label={datapoint.label}
					value={datapoint.value}
				/>
			))}
		</div>
	);
}
