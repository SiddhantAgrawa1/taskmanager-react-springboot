import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowNote({note}) {
  return (
    <Card style={{ width: '18rem' }} className='m-1'>
      <Card.Body>
        <Card.Title>{note.heading}</Card.Title>
        <Card.Text>
          {note.note}
        </Card.Text>
        <Button variant="primary">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default ShowNote;