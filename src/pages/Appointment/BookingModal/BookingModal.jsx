import React from "react";

const BookingModal = ({ treatment, setTreatment, pickDate }) => {
  // treatment is appointment option just different name
  const { name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
        appointmentDate: pickDate,
        treatment: name,
        patientName,
        slot,
        email,
        phone
    }
    // todo send data to the server
    // and once data is saved then close the modal
    // and display success toast
    console.log(booking);
    setTreatment(null)
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              defaultValue={pickDate}
              className="input w-full"
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, idx) => (
                <option value={slot} key={idx}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full border border-[#CFCFCF]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input w-full border border-[#CFCFCF]"
              required
            />
            <input
              type="Phone Number"
              name="phone"
              placeholder="Type here"
              className="input w-full border border-[#CFCFCF]"
              required
            />
            <input
              type="submit"
              className="w-full text-white rounded btn btn-accent"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
