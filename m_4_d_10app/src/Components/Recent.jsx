import React from 'react';
import BigCard from './BigCard';

export default function Recent() {
	return (
		<div className="songs good-morning-section col-12 col-sm-8 col-md-9 col-lg-10 p-0 m-0">
			<div className="d-flex flex-wrap">
				<BigCard />
				<BigCard />
				<BigCard />
			</div>
		</div>
	);
}
