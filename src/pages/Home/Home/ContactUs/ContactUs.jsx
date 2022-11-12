import React from "react";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";
import appointment from '../../../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <div className="py-16 text-white mx-auto" style={{background: `url(${appointment})`}}>
      <div className="text-center">
        <h4 className="text-primary font-bold">Contact Us</h4>
        <h2 className="text-4xl">Stay connected with us</h2>
      </div>
      <div className="hero">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm">
            <div className="card-body w-[26rem]">
              <div className="form-control w-full h-12">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered h-12 text-black"
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered h-12 text-black"
                />
              </div>
              <div className="form-control w-full h-36 text-black">
                <textarea
                  className="textarea textarea-info resize-none h-full"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-0">
      <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default ContactUs;
