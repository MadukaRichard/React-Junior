import React from 'react'
import '../App.css'

const Hero2 = () => {
  return (
    <div className='hero-2 container py-5'>
       <h2 className='hero-2-title fw-bold mb-4'>Start here. Change the world.</h2> 
       

       <div className="row g-4">
        
        <div className="col-md-4 ">
            <div className="hero-2-advert-lists">
                <img src="https://sqi.edu.ng/wp-content/uploads/2023/06/college.jpg" alt="college" className='hero-2-advert-lists-image img-fluid' />
                <div className="hero-2-advert-lists-descriptions">
                    <p className="hero-2-advert-lists-descriptions-title fw-bold blue mt-3">
                    National Diploma (ND)
                    </p>
                    <p className='hero-2-advert-lists-descriptions-news'>The National Diploma (ND) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE)...</p>
                    <a href="#" className="text-decoration-none blue pb-1">Learn More</a>
                </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="hero-2-advert-lists">
                <img src="https://sqi.edu.ng/wp-content/uploads/2023/06/prof.jpg" alt="college" className='hero-2-advert-lists-image img-fluid'/>
                <div className="hero-2-advert-lists-descriptions">
                    <p className="hero-2-advert-lists-descriptions-title fw-bold blue mt-3">
                    Professional Diploma Certificate
                    </p>
                    <p className='hero-2-advert-lists-descriptions-news'>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
                    <a href="#" className="text-decoration-none pb-1 blue">Learn More</a>
                </div>
            </div>
        </div>


        <div className="col-md-4">
            <div className="hero-2-advert-lists">
                <img src="https://sqi.edu.ng/wp-content/uploads/2023/06/certificate.jpg" className='hero-2-advert-lists-image img-fluid'/>
                <div className="hero-2-advert-lists-descriptions">
                    <p className="hero-2-advert-lists-descriptions-title fw-bold blue mt-3">
                    Certificate Program
                    </p>
                    <p className='hero-2-advert-lists-descriptions-news'>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI...</p>
                    <a href="#" className="text-decoration-none pb-1 blue">Learn More</a>
                </div>
            </div>
        </div>

        

       </div>
       <div className="programmes row g-4 mt-4">
            <div className="programme-lists col-md-4">
            <p className='blue fw-bold'>NATIONAL DIPLOMA COURSES</p>
            <ul className='list-unstyled'>
                <li className='border-bottom border-primary mt-1'><b>Duration:</b> 2 Years</li>
                <li className='border-bottom border-primary mt-1'><b>Certificate:</b> Both National Diploma and Professional Diploma.</li>
                <li className='border-bottom border-primary mt-1'> <b>Skills:</b> Academic Institution recognized skills and In-demand professional skills.</li>
                <li className='border-bottom border-primary mt-1'> <b>Entry Requirements:</b> 120 min in JAMB, 5 Credits in O-Level and Your passion</li>
                <li className='border-bottom border-primary mt-1'><b>Required Hardware:</b> (usually Laptop)</li>
                <li className='border-bottom border-primary mt-1'> <b>Direct Entry:</b> Yes (Any University)</li>
                <li className='border-bottom border-primary mt-1'> <b>Transcript & Internship:</b> Yes</li>
                <li className=''><b>Access to Alumni Network and Opportunities:</b> Yes.</li>
            </ul>
            </div>
            <div className="programme-lists col-md-4">
            <p className='blue fw-bold'>NATIONAL DIPLOMA COURSES</p>
            <ul className='list-unstyled'>
                <li className='border-bottom border-primary mt-1'><b>Duration:</b> 4-12 Months Courses</li>
                <li className='border-bottom border-primary mt-1'><b>Certificate:</b> Professional Diploma</li>
                <li className='border-bottom border-primary mt-1'> <b>Skills:</b> In-demand professional skills</li>
                <li className='border-bottom border-primary mt-1'> <b>Entry Requirements:</b> Your passion</li>
                <li className='border-bottom border-primary mt-1'><b>Required Hardware:</b> (usually Laptop)</li>
                <li className='border-bottom border-primary mt-1'> <b>Transcript & Internship:</b> Yes</li>
                <li className=''><b>Access to Alumni Network and Opportunities:</b> Yes.</li>
            </ul>
            </div>
            <div className="programme-lists col-md-4">
            <p className='blue fw-bold'>NATIONAL DIPLOMA COURSES</p>
            <ul className='list-unstyled'> 
                <li className='border-bottom border-primary mt-1'><b>Duration:</b> 2 weeks to 10 months</li>
                <li className='border-bottom border-primary mt-1'><b>Certificate:</b> Certificate Program</li>
                <li className='border-bottom border-primary mt-1'> <b>Skills:</b> In-demand professional skills</li>
                <li className='border-bottom border-primary mt-1'> <b>Entry Requirements:</b> Your passion</li>
                <li className='border-bottom border-primary mt-1'><b>Required Hardware:</b> (usually Laptop)</li>
                <li className='border-bottom border-primary mt-1'> <b>Transcript & Internship:</b> No</li>
                <li className=''><b>Access to Alumni Network and Opportunities:</b> Yes.</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero2