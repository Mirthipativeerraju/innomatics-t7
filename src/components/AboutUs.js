import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
    return (
        <div className="container mt-5 about-us">
            {/* Hero Image */}
            <div className="text-center mb-5">
                <img src="https://st2.depositphotos.com/3591429/6006/i/450/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg" className="img-fluid rounded shadow" alt="Book Store" />
            </div>

            {/* Mission and Vision Section */}
            <div className="row mb-5">
                <div className="col-lg-6 mb-4 d-flex">
                    <div className="p-4 border rounded bg-light shadow w-100 d-flex flex-column justify-content-center text-center">
                        <h2 className="mb-3 font-weight-bold">Our Mission</h2>
                        <p>
                            At Book Hive, our mission is to inspire a love of reading by providing a diverse selection of books for all ages and interests. We strive to create a welcoming environment for book lovers everywhere.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 mb-4 d-flex">
                    <div className="p-4 border rounded bg-light shadow w-100 d-flex flex-column justify-content-center text-center">
                        <h2 className="mb-3 font-weight-bold">Our Vision</h2>
                        <p>
                            We envision a community where everyone has access to the world of literature, fostering imagination, knowledge, and creativity through books.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <h2 className="text-center mt-5 mb-4 font-weight-bold">Why Choose Us?</h2>
            <div className="row">
                {[
                    { title: 'Vast Selection of Titles', text: 'Discover books from various genres, including fiction, non-fiction, and children\'s literature.' },
                    { title: 'Expert Recommendations', text: 'Get personalized book recommendations from our knowledgeable staff.' },
                    { title: 'Community Events', text: 'Join us for book signings, readings, and discussion groups.' },
                    { title: 'Online and In-Store Shopping', text: 'Enjoy the convenience of shopping online or visiting us in person.' },
                ].map((item, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card text-center h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title font-weight-bold text-success">{item.title}</h5>
                                <p className="card-text flex-grow-1">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
