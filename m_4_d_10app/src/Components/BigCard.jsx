import React from 'react';
export default function BigCard() {
	return (
		<div className="Recently-card col-2 ml-3 p-2 ">
			<img
				src="https://i.scdn.co/image/ab67616d0000b2735218a8028e73b7fd7d785514"
				className="card-img-top"
			/>
			<div className="card-body mt-2">
				<h6 className="card-title text-white">Card title</h6>
				<h5 className="card-text">Some quick example text</h5>
				<button id="btn-with-style1" type="button" className="btn btn-dark">
					▶
				</button>
			</div>
		</div>
	);
}
