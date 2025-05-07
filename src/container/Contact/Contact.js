import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact Us</h2>
            <span className="section-divider"></span>
            {/* <p className="no-margin scaleReveal">
              Our team is from all over the world and we know how to deliver quality pixels from miles away.
            </p> */}
          </div>
        </div>
        <div className="contact-container">
        <div className="contactform">
          <form data-toggle="validator" id="contactForm" name="contactForm">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="controls">
                    <input className="form-control"data-error="This section is required." id="msg_subject"
                      placeholder="Subject *"required type="text" />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="controls">
                    <input className="form-control" id="phone" placeholder="Phone" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="controls">
                    <input className="form-control" data-error="This section is required." id="name"
                     placeholder="Your Name *" required type="text" />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="controls">
                    <input className="email form-control" data-error="This section is required." id="email"
                      placeholder="Email *" required type="email" />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="controls">
                    <textarea className="form-control" data-error="This section is required." id="message"
                      placeholder="Message *" required rows="10" ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt15">
              <div className="col-sm-6">
                <div id="msgSubmit" className="h4 hidden mt10 no-margin-bottom"></div>
              </div>
              <div className="col-sm-6 text-right">
                <button type="submit" id="submit" className="btn btn-default btn-lg">Send</button>
              </div>
            </div>
          </form>
        </div>
        
          <div className="section-text">
            <p className="no-margin scaleReveal">
              Our team is from all over the world and we know how to deliver quality pixels from miles away.
            </p>
          </div>
        
        {/* <div className="row">
          <div className="col-sm-5 col-lg-6">
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9796066990993!2d74.3814723155397!3d31.524720054080714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919053a48e6e18d%3A0x5aea979fb54ee09!2sCMC%20M-Tech!5e0!3m2!1sen!2s!4v1645178216696!5m2!1sen!2s"
                title="Google Map Location"
              
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
