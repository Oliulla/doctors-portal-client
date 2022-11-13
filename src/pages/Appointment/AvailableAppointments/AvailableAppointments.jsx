import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ footer }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const date = footer;
  let pickDate = date.props.children[1];

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setAppointmentOptions(data);
      });
  }, []);

  return (
    <section className="my-16">
      <h2 className="text-secondary text-center font-bold">
        Available Appointments on {pickDate ? pickDate : ""}
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} pickDate={pickDate} />}
    </section>
  );
};

export default AvailableAppointments;
