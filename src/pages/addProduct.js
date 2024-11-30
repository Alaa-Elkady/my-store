import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProductForm = ({items}) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const [newProduct, setNewProduct] = useState(null);
   
    useEffect(() => {
        const postData = async () => {
            if (newProduct) {
                try {
                    // Simulate a POST request
                    const response = await fetch('http://localhost:8000/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newProduct),
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const result = await response.json();
                    console.log('Product added:', result);
                    setMessage('Product added successfully!');
                    items.push(newProduct);

                } catch (error) {
                    console.error('Error:', error);
                    setMessage('Failed to add product.');
                }
            }
        };

        postData();
    }, [newProduct]); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            name: productName,
            price: parseFloat(price),
            category: category,
            desc:desc,
            image: image 
        };

        setNewProduct(product); 
        
        setProductName('');
        setPrice('');
        setCategory('');
        setDesc(''); 
        setImage('');
    };

    return (
        <Container className="mt-5">
            <h2>Add New Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter product name" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter product price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formProductDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter product Discription" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formProductCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter product Category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formProductImage">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Enter product image url'
                        onChange={(e)=> setImage(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Product
                </Button>
            </Form>
            {message && <div className="mt-3">{message}</div>}
        </Container>
    );
};

export default AddProductForm;