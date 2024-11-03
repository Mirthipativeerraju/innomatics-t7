import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Create custom styles

const Home = () => {
    return (
        <div className="hero d-flex justify-content-center align-items-center" style={{ 
            background: 'url(https://wallpaperaccess.com/full/1543409.jpg) no-repeat center center', 
            backgroundSize: 'cover', 
            height: '100vh', 
            color: 'white' 
        }}>
            <div className="text-center">
                
            <h1 className="display-4 text-light">Welcome to Book Hive</h1>
                <p className="lead">Discover a world of stories waiting to be read!</p>
                <Link className="btn btn-light btn-lg" to="/books">Browse Books</Link>
            </div>
        </div>
    );
};

export default Home;
