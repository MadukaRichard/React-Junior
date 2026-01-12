import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section bg-light pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-2">
            <h6 className="smaller blue fw-bold mb-4">Hello, we're SQI College of ICT</h6>
            <p className="small text-muted">We provide and lead others in quality ICT education.</p>
            <div className="social-icons d-flex gap-2 mb-4">
      <FontAwesomeIcon icon={faFacebookF} className="blue smallest" />
      <FontAwesomeIcon icon={faTwitter} className="blue smallest" />
      <FontAwesomeIcon icon={faLinkedinIn} className="blue smallest" />
      <FontAwesomeIcon icon={faYoutube} className="blue smallest" />
      <FontAwesomeIcon icon={faInstagram} className="blue smallest" />
    </div>
            <h6 className="fw-bold small">Send us a mail</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="mailto:enquiry@sqi.edu.ng" className="text-primary small text-decoration-none">enquiry@sqi.edu.ng</a></li>
              <li><a href="mailto:admissions@sqi.edu.ng" className="text-primary small text-decoration-none">admissions@sqi.edu.ng</a></li>
              <li><a href="mailto:examsandrecords@sqi.edu.ng" className="text-primary small text-decoration-none">examsandrecords@sqi.edu.ng</a></li>
              <li><a href="mailto:rector@sqi.edu.ng" className="text-primary small text-decoration-none">rector@sqi.edu.ng</a></li>
              <li><a href="mailto:internship@sqi.edu.ng" className="text-primary small text-decoration-none">internship@sqi.edu.ng</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="smaller fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled footer-links text-muted small">
              <li className="mb-2">Application Portal</li>
              <li className="mb-2">Student Portal</li>
              <li className="mb-2">Professional Courses</li>
              <li className="mb-2">NID Courses</li>
              <li className="mb-2">Campus Info</li>
              <li className="mb-2">Accommodation</li>
              <li className="mb-2">SQI Scholarship</li>
              <li className="mb-2">SQI Anthem</li>
              <li className="mb-2">Donate</li>
            </ul>
          </div>


          <div className="col-md-2">
            <h6 className="smaller fw-bold mb-4">Ogbomoso</h6>
            <p className="small text-muted">Old Ilorin Road, Opposite Yoaco Filling Station, Yoaco, Ogbomoso.</p>
            <p className="small fw-bold">0906 281 9991, 0906 281 9993</p>
            <a href="#" className="small text-primary text-decoration-none">Locate on the map</a>
          </div>

          <div className="col-md-3">
            <h6 className="smaller fw-bold mb-4">Ibadan</h6>
            <div className="mb-4">
              <p className="small text-muted mb-1">First Floor, H25 Heritage Mall, Opposite Central Bank of Nigeria, Dugbe, Ibadan.</p>
              <p className="small fw-bold mb-1">0906 281 9994</p>
              <a href="#" className="small text-primary text-decoration-none">Locate on the map</a>
            </div>
            <div className="mb-4">
              <p className="small text-muted mb-1">Christianah Oyinade Ajoke House, beside First Bank, Arisekola Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo road, Ibadan.</p>
              <p className="small fw-bold mb-1">0906 281 9995</p>
              <a href="#" className="small text-primary text-decoration-none">Locate on the map</a>
            </div>
            <div>
              <p className="small text-muted mb-1">Haier Thermocool Building, opposite SAO filling station, Challenge, Ibadan, Oyo State.</p>
              <p className="small fw-bold mb-1">0906 281 9992</p>
              <a href="#" className="small text-primary text-decoration-none">Locate on the map</a>
            </div>
          </div>

          <div className="col-md-3">
            <div className="mb-4">
              <h6 className="smaller fw-bold mb-3">Abeokuta</h6>
              <p className="small text-muted mb-1">First floor, OPIC Tower building, Okeilewo, Abeokuta.</p>
              <p className="small fw-bold mb-1">0906 281 9996</p>
              <a href="#" className="small text-primary text-decoration-none">Locate on the map</a>
            </div>
            <div className="mb-4">
              <h6 className="smaller fw-bold mb-3">Osogbo</h6>
              <p className="small text-muted mb-1">Opposite Jaiz bank, Ogo-Oluwa, Osogbo</p>
              <p className="small fw-bold mb-1">0906 281 9997</p>
              <a href="#" className="small text-primary text-decoration-none">Locate on the map</a>
            </div>
            <div>
              <h6 className="smaller fw-bold mb-3">Abuja</h6>
              <p className="small text-muted mb-1">Suite Banking Hall SF, Febson Mall, Wuse Zone 4, Abuja</p>
              <p className="small fw-bold mb-1">090 628 20000</p>
              <a href="#" className="small text-primary text-decoration-none">Locate on the map</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;