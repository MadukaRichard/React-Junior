import React from 'react';
import '../App.css';

const News = () => {
  const newsData = [
    {
      id: 1,
      image: "https://sqi.edu.ng/wp-content/uploads/2025/11/SQI4348-convocation-400x250.jpg",
      title: "SQI College of ICT Holds First Convocation, Honours Pioneer Graduates",
      date: "Nov 12, 2025",
      description: "SQI College of ICT, Ogbomoso, on November 2025, as the institution held its maiden Convocation Ceremony at..."
    },
    {
      id: 2,
      image: "https://sqi.edu.ng/wp-content/uploads/2025/05/SQI_8351-400x250.jpg",
      title: "Students embrace new opportunities with matriculation at SQI College of ICT",
      date: "May 5, 2025",
      description: "SQI College of ICT, Ogbomoso, on Saturday, May 3, 2025, held its 8th Matriculation Ceremony for the 2024/2025 academic session..."
    },
    {
      id: 3,
      image: "https://sqi.edu.ng/wp-content/uploads/2025/03/Java-engineers-400x250.jpg",
      title: "Building the Next Army of Java Generals",
      date: "Mar 21, 2025",
      description: "From the small text regarding seed funding, human settlement, this training is aimed at closing the developer gap..."
    }
  ];

  return (
    <div className="news">
    <div className="container py-5 news-bg">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="fw-bold">Latest News</h2>
        <button className="btn btn-primary rounded-pill px-2 px-md-4 btn-sm fw-bold">Read More</button>
      </div>

      <div className="row g-4">
        {newsData.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card border-0 shadow-sm h-100 news-card">
              <img src={item.image} className="card-img-top news-img" alt="news" />
              <div className="card-body px-4">
                <h5 className="card-title fw-bold small-title">{item.title}</h5>
                <p className="text-danger small mb-2">{item.date}</p>
                <p className="card-text text-muted small-desc">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default News;