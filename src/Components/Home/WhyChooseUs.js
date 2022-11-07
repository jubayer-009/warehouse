import React from 'react';

const WhyChooseUs = () => {
  return (
    <div>
      <div className=" p-10 bg-choose-us">
        <h1 className="text-5xl font-bold text-center text-base-200 ">
          <span className="text-white text-5xl font-bold px-7 ">\\</span>Why
          Choose Us?
          <span className="text-white text-5xl font-bold px-7 ">\\</span>
        </h1>
        <div className="divider mx-auto w-1/3 "></div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  rounded-box w-1/2 mx-auto bg-base-200 hover:bg-secondary  my-3"
        >
          <div className="collapse-title text-xl font-medium text-primary hover:text-white">
            We are Creative & Proffesional
          </div>
          <div className="collapse-content bg-base-200">
            <p>
              With over 60 years of providing world class service to their
              customers on the asset side, a need to provide a one stop shop for
              a” true customer service logistic solution” was introduced. By
              adding this dimension to an already dynamic and customer centric
              asset based provider, we feel we bring a total solution.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  rounded-box w-1/2 mx-auto bg-base-200 my-3 hover:bg-secondary"
        >
          <div className="collapse-title text-xl font-medium text-priamry hover:text-white">
            Honest & Dependable
          </div>
          <div className="collapse-content bg-base-200 ">
            <p>
              aI am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  rounded-box w-1/2 mx-auto bg-base-200 my-3 hover:bg-secondary"
        >
          <div className="collapse-title text-xl font-medium text-priamry hover:text-white">
            Quality & Commitment
          </div>
          <div className="collapse-content bg-base-200">
            <p>
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300  rounded-box w-1/2 mx-auto bg-base-200 hover:bg-secondary"
        >
          <div className="collapse-title text-xl font-medium text-priamry hover:text-white">
            We are Always Improving
          </div>
          <div className="collapse-content bg-base-200">
            <p>
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;