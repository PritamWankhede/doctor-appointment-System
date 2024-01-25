// import React, { useState } from "react";
import React from "react";

import styles from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Plus from "../../Assets/Plus.png";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.mainGrid}>
      <div>
        <h1 className={styles.h1}>FAQ</h1>
        <p className={styles.p}>
        FAQ Hub: Find Answers to Your Queries
        </p>
      </div>
      <div className={styles.Acc}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <div>
              <Typography>How do I book an appointment?</Typography>
            </div>
            <div className={styles.add}>
              {expanded === "panel1" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
            Booking an appointment is simple! Navigate to our "Book Appointment" section, fill 
            in your details, choose a preferred date and time, and submit the form. 
             You'll receive a confirmation email with all the necessary details.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <div>
              <Typography>Can I change or cancel my appointment?</Typography>
            </div>
            <div className={styles.add}>
              {expanded === "panel2" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
            Absolutely! If you need to reschedule or cancel your appointment, simply log in to your account,
             go to the "My Appointments" section, and follow the prompts to make the necessary changes. 
             Make sure to check our cancellation policy for any applicable fees.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <Typography>What healthcare services do you provide?</Typography>
            <div className={styles.add}>
              {expanded === "panel3" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
            Our healthcare services encompass a wide range of medical specialties, including primary care, 
            specialized consultations, diagnostic tests, and preventive care. Explore our "Services" section 
            for a detailed list of offerings.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.summary}
          >
            <Typography>How can I access my medical records?</Typography>
            <div className={styles.add}>
              {expanded === "panel4" ? <></> : <img src={Plus} alt="Plus" />}
            </div>
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            <Typography className={styles.type}>
            Your medical records are easily accessible through your secure patient portal. 
            Log in to your account, and you'll find a dedicated section where you can view and download 
            your medical history, test results, and treatment plans.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;