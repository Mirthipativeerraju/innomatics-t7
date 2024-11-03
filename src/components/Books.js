import React from 'react';

import './Books.css';
const Books = () => {
    const bookCategories = [
        {
            category: 'Fiction',
            products: [
                { name: 'Fire Dance', img: 'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/4/f2/4f24a2e1-f2a1-5264-8240-c4aaca50607a/5acb824c75eec.image.jpg' },
                { name: 'Snow Crash', img: 'https://www.rd.com/wp-content/uploads/2019/12/91NrsGzBjUL.jpg?w=1653' },
                { name: 'Science Fiction', img: 'https://www.blackgate.com/wp-content/uploads/2018/04/The-Collectors-Book-of-Science-Fiction.jpg' },
            ],
        },
        {
            category: 'Mystery & Thriller',
            products: [
                { name: 'The Lost Sister', img: 'https://i.pinimg.com/originals/1a/71/85/1a7185a06f2727cca33b6e93df2a4a63.jpg' },
                { name: 'Killing is My Business', img: 'https://www.mysterytribune.com/wp-content/uploads/2017/12/Killing-Is-My-Business-A-Ray-Electromatic-Mystery-adam-christopher-best-mystery-and-thriller-book-covers-2017-770x1165.jpg' },
                { name: 'Hanging House', img: 'https://miblart.com/wp-content/uploads/2020/10/Dean_Rasmussen_ebook-scaled.jpg' },
            ],
        },
    ];

    return (
        <div className="container mt-5">
            {bookCategories.map((category, index) => (
                <div key={index}>
                    <h2 className="text-center mb-4">{category.category}</h2>
                    <div className="row mb-5">
                        {category.products.map((product, productIndex) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4" key={productIndex}>
                                <div className="card">
                                    <img src={product.img} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{product.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Books;
