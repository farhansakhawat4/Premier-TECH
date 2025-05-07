import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Customer Reviews</h2>
      <div className="testimonials">
        <div className="testimonial">
          <div className="stars">★★★★★</div>
          <h4 className="testimonial-author">- Sarah M.</h4>
          <p className="testimonial-text">
            "This app changed the way I work out. Easy to use and super effective!"
          </p>
        </div>
        <div className="testimonial">
          <div className="stars">★★★★☆</div>
          <h4 className="testimonial-author">- John D.</h4>
          <p className="testimonial-text">
            "Highly recommend it for anyone looking to stay on track with their fitness goals."
          </p>
        </div>
        <div className="testimonial">
          <div className="stars">★★★★★</div>
          <h4 className="testimonial-author">- Ayesha K.</h4>
          <p className="testimonial-text">
            "Clean UI, excellent support, and really helpful features."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
