import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';
export default function CommentList({ comments }) {
	return (
		<ListGroup>
			{comments.map((comment) => (
                <SingleComment key={comment._id }comment={comment} />
			))}
		</ListGroup>
	);
}
