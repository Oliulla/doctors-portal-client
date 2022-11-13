import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import { format } from "date-fns";


const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

    
  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You have selected date: {format(selectedDate, "PP")}</p>

  }

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} footer={footer} />
            <AvailableAppointments selectedDate={selectedDate} footer={footer} />
        </div>
    );
};

export default Appointment;