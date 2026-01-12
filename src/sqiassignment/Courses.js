import React from 'react';
import '../App.css';

const Courses = () => {
  return (
    <div className='container py-5 mt-5'>
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="fw-bold blue display-6">Our Top Courses</h2>
          <p className='text-muted'>Take a look at some of our popular courses</p>
          <a href="#" className="blue fw-bold text-decoration-none border-bottom border-primary pb-1">View all Courses</a>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6 d-flex flex-column gap-4">
          <div className="course-card course-1 p-4 shadow-blue border border-dark d-flex align-items-center justify-content-center flex-column">
            <div className="img-container mb-4">
              <img src="https://edu.sqi.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp" alt="software" className='img-fluid rounded-4' />
            </div>
            <h3 className="fw-bold h4">Software Engineering</h3>
            <p className="text-muted small-text">Software Engineering is one of the most in-demand jobs across the globe today.

Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your ….</p>
            <a href="#" className="text-decoration-none fw-bold blue border-bottom border-primary pb-1">Learn More</a>
          </div>

        
          <div className="course-card course-3 p-4 shadow-tan border border-dark d-flex align-items-center justify-content-center flex-column">
            <div className="img-container mb-4">
              <img src="https://edu.sqi.ng/wp-content/uploads/2023/03/product.jpg" alt="uiux" className='img-fluid rounded-4' />
            </div>
            <h3 className="fw-bold h4">UI/UX – Product Design</h3>
            <p className="text-muted small-text">More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps.

Making an intuitive digital product design is even more import at this time as it…

</p>
            <a href="#" className="text-decoration-none fw-bold blue border-bottom border-primary pb-1">Learn More</a>
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column gap-4 mt-md-5">
          <div className="course-card course-2 p-4 shadow-yellow border border-dark d-flex align-items-center justify-content-center flex-column">
            <div className="img-container mb-4">
              <img src="https://edu.sqi.ng/wp-content/uploads/2023/01/DATA-SQI.jpg" alt="data" className='img-fluid rounded-4' />
            </div>
            <h3 className="fw-bold h4">Data Science & Analysis</h3>
            <p className="text-muted small-text">The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.

Data specialists have a tremendous impact on…</p>
            <a href="#" className="text-decoration-none fw-bold blue border-bottom border-primary pb-1">Learn More</a>
          </div>

          <div className="course-card course-4 p-4 shadow-purple border border-dark d-flex align-items-center justify-content-center flex-column">
            <div className="img-container mb-4">
              <img src="https://edu.sqi.ng/wp-content/uploads/2023/03/digital-literacy.jpg" alt="literacy" className='img-fluid rounded-4' />
            </div>
            <h3 className="fw-bold h4">Digital Literacy</h3>
            <p className="text-muted small-text">This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register.

In this course, you will learn about the technologies that drive our computerized society…</p>
            <a href="#" className="text-decoration-none fw-bold blue border-bottom border-primary pb-1">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;