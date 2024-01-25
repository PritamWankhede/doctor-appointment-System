import React, { useState } from 'react';
import Styles from './Registrationform.module.css';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Testimonials from '../Testimonials/Testimonials';
import Faq from '../FAQ/FAQ';
import Footer from '../Footer/Footer';

const Registrationform = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [complain, setComplain] = useState('');
  const [experience, setExperience] = useState('');

  const navigate = useNavigate();

 const handleButtonClick = () => {
  const formData = {
    name,
    phone,
    age,
    city,
    complain,
    experience,
  };

  navigate('/bookingDetail', { state: formData });
};


  return (
    <>
    <Navbar/>
    <div className={Styles.container}>
      <Box className={Styles.formdetail}>
        <Grid className={Styles.firsthalf}>
          <Paper elevetion={20} className={Styles.paperStyle}>
            <h2 className={Styles.book}>Book here</h2>
            <Typography variant="caption" gutterBottom>
              Please Fill the form to book the appointment
            </Typography>
            <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={2} className={Styles.formfield}>
              <form>
                <TextField fullWidth label="Patient Name" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField fullWidth label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <TextField fullWidth label="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <TextField fullWidth label="City" value={city} onChange={(e) => setCity(e.target.value)} />
                <TextField fullWidth label="Chief complaints" value={complain} onChange={(e) => setComplain(e.target.value)} />
                <TextField fullWidth label="Previous Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
               
                <Button type="button" variant="contained" color="primary" className={Styles.submitButton} onClick={handleButtonClick}>
                  Submit
                </Button>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Box>
      <Box className={Styles.heroimage}>
        <img src={require('../../Assets/IndianDoctor.png')} alt="Health Icon" />
      </Box>
    </div>
    <Testimonials />
    <Faq/>
    <Footer/>
    </>
  );
};

export default Registrationform;
