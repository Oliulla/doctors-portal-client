import React from "react";
import Chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


  return (
    <header
    className="my-6"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <img src={Chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
          <div className="md:mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
