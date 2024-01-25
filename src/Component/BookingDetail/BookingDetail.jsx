import React from 'react';
import Styles from './BookingDetail.module.css';
import { useLocation,useNavigate } from 'react-router-dom';
const BookingDetail = () => {
  const navigate = useNavigate();
  const location = useLocation()
  
  const { name, phone, age, city, complain, experience } = location.state;

  return (
    <div className={Styles.container}>
      <h1>Hello, you have successfully registered your appointment!</h1>
      <div className={Styles.details}>
        <h2>Booking Details:</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>Chief Complaints:</strong> {complain}
        </p>
        <p>
          <strong>Previous Experience:</strong> {experience}
        </p>
      </div>
      <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  );
};

export default BookingDetail;
