import React from "react";
import Chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
// import bgImg from '../../../assets/images/bg.png';

const Banner = () => {
  return (
    <div className='hero'>
      <div className="hero-content flex-col lg:flex-row-reverse gap-6">
        <img
          src={Chair}
          className="rounded-lg md:w-1/2 shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
