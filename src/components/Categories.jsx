import {useState, useEffect} from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Categories = () =>{

    const [cat, setCat] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getCategories();
    },[]);

    const getCategories = async() =>{
        const {data} = await axios.get('https://dummyjson.com/products');
        setCat(data.products);
        setIsLoading(false);
    }

    const categories = cat?.map((item,index)=>{
            return item.category
        }
    )

    const uniqueCat = [... new Set(categories)]
    
    
    return (
        <Card style={{width: '20%'}} className='rounded-1'>
            {
                isLoading?<p>Loading...</p>:(
                    <ListGroup as="ul">
                {
                    uniqueCat.map((item, index)=>{
                        return (
                            <Link to='/searchedproduct' key={index} className='text-decoration-none'>
                                <ListGroup.Item as="li">
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </ListGroup.Item>
                            </Link>
                                
                        )
                    })
                }
            </ListGroup>
                )
            }
        </Card>
    )
}

export default Categories;