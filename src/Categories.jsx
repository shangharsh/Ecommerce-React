import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Categories = () =>{
    return (
        <Card style={{width: '20%'}} className='rounded-1'>
          <ListGroup as="ul">
                <ListGroup.Item as="li">
                    Categories1
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Categories2
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Categories3
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Categories4
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Categories5
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    Categories6
                </ListGroup.Item>
    </ListGroup>
        </Card>
    )
}

export default Categories;