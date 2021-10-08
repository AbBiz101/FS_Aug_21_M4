import React from 'react';
export default function BigCard() {
	return (
		<div className="good-morning-card ml-3 mt-4 mb-3 active ">
			<div className="row no-gutters">
				<div className="col-3">
					<img src="" style={{ borderRadius: 4 }} width={80} />
				</div>
				<div className="col-5 ml-5">
					<div className="card-body">
						<h6 className="card-title text-white">Burning Jazz-rock Fusion</h6>
						<button
							id="btn-with-style"
							type="button"
							onclick="playTrack()"
							className="btn btn-success"
						>
							▶
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
