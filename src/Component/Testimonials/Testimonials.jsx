import React from 'react'
import styles from './Testimonials.module.css'
const Testimonials = () => {
  return (
    <div>
      <div className={styles.heading}>
        <h1 className={styles.h1}>What says our happy Clients</h1>
        <div className={styles.heading}>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <img src={require('../../Assets/womenimage.jpg')} alt="Gift" className={styles.personimg} />
          </div>
          <div>
            <h4 className={styles.h4}>Kavyashree L</h4>

            <p className={styles.p}>
            The staff was incredibly attentive and caring. From the moment I booked my appointment to the consultation with the doctor, everything was seamless. 
            The platform is user-friendly, and the healthcare professionals are both knowledgeable and compassionate. 
            I highly recommend this website for anyone seeking top-notch healthcare services.

            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src={require('../../Assets/person.jfif')} className={styles.personimg} />
          </div>
          <div>
            <h4 className={styles.h4}>Hemant Narak</h4>
      <p className={styles.p}>
            I'm impressed with the efficiency of the booking process on this healthcare website. The registration form was straightforward, 
            and I could easily schedule an appointment that suited my availability. The platform is well-designed, making it simple to navigate and access the information I needed. 
            The prompt and professional service, coupled with the user-friendly interface, has made my healthcare journey smooth and hassle-free. 
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <img src={require('../../Assets/female.jfif')} alt="Gift" className={styles.personimg} />
          </div>
          <div>
            <h4 className={styles.h4}>Usha Singh</h4>

            <p className={styles.p}>
            I appreciate the comprehensive information provided on this health care website. 
            The details about different services, medical professionals, and the booking process are all clearly presented.
            The website's design is intuitive, making it easy for users to find what they need. 
            Additionally, the timely reminders and notifications kept me informed about my upcoming appointments.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;