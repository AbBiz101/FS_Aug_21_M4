import React from 'react';
import { Form } from 'react-bootstrap';
export default class ComentArea extends React.Component {
	state = {
		comments: [],
	};
	componentDidMount = async () => {
		try {
			let resp = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjE0ZDRiYjUzZDAwMTViMTllZDMiLCJpYXQiOjE2MzMyODI0NDksImV4cCI6MTYzNDQ5MjA0OX0.Jt6fmjM4PF3HKpx5GVt5uiUBfLcVPLtvh0xCUThTsfs',
					},
				},
			);
			let comments=await resp.json()
            this.setState({ comments });
        } catch (error) {
            console.log(error)
        }
	};

	render() {
		return <Form.Control as="textarea" rows={1} />;
	}
}
