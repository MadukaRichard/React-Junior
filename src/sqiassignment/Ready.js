import React from 'react';
import '../App.css';

const Ready = () => {
  return (
    <div className="ready-section py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <p className="text-uppercase fw-bold text-white smallest ls-2 mb-3">
              It's time for you to take your tech career to the next level
            </p>
            <h2 className="display-5 fw-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white lead mb-3 w-75 fw-bold">
              We provide and lead others in quality education, service, industry, and character as well as discipline.
            </p>
            <button className="btn btn-join rounded-pill px-3 py-2 fw-bold text-white">
              Join Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;