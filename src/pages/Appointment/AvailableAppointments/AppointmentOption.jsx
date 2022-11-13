import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card shadow-xl md:w-[26rem]">
      <div className="card-body items-center">
        <h2 className="card-title text-primary font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length > 1
            ? `${slots.length} spaces`
            : `${slots.length} space`}{" "}
          available
        </p>
        <div className="card-actions">
          <label
          disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
