import {useState, useEffect} from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Categories = () =>{

    const [cat, setCat] = useState();
    useEffect(() => {
        getCategories();
    },[]);

    const getCategories = async() =>{
        const {data} = await axios.get('https://dummyjson.com/products');
        setCat(data.products);
    }

    const categories = cat?.map((item,index)=>{
            return item.category
        }
    )

    const uniqueCat = [... new Set(categories)]
    
    
    return (
        <Card style={{width: '20%'}} className='rounded-1'>
            <ListGroup as="ul">
                {
                    uniqueCat.map((item, index)=>{
                        return (
                            <a href={index} key={index} className='text-decoration-none'>
                                <ListGroup.Item as="li">
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </ListGroup.Item>
                            </a>
                        )
                    })
                }
            </ListGroup>
        </Card>
    )
}

export default Categories;