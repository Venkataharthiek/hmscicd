import React from "react";

const Doctors = () => {
  return (
    <div className="doctors">
      <h2>Meet Our Expert Doctors</h2>
      <p className="doctor-intro">
        Our hospital is proud to have a team of highly skilled and compassionate
        doctors who are dedicated to providing world-class medical care.
      </p>

      <div className="doctor-grid">
        <div className="doctor-card">
          <img src="/images/doctor1.jpg" alt="Dr. Arjun Mehta" />
          <h3>Dr. Arjun Mehta</h3>
          <p>Cardiologist</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor2.jpg" alt="Dr. Nisha Kapoor" />
          <h3>Dr. Nisha Kapoor</h3>
          <p>Neurologist</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor3.jpg" alt="Dr. Rohit Verma" />
          <h3>Dr. Rohit Verma</h3>
          <p>Orthopedic Surgeon</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor4.jpg" alt="Dr. Meera Iyer" />
          <h3>Dr. Meera Iyer</h3>
          <p>Pediatrician</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor5.jpg" alt="Dr. Karan Singh" />
          <h3>Dr. Karan Singh</h3>
          <p>General Physician</p>
        </div>

        <div className="doctor-card">
          <img src="/images/doctor6.jpg" alt="Dr. Priya Menon" />
          <h3>Dr. Priya Menon</h3>
          <p>Gynecologist</p>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
