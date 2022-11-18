import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ footer }) => {
  const [treatment, setTreatment] = useState(null);

  const date = footer;
  let pickDate = date.props.children[1];

  const {data: appointmentOptions, isError, error, isLoading, refetch} = useQuery({
    queryKey: ['appointmentoptions', pickDate],
    queryFn: async() => {
      const res = await fetch(`http://localhost:5000/v2/appointmentoptions?date=${pickDate}`);
      const data = await res.json();
      return data;
    }
  })

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }



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
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          pickDate={pickDate}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
