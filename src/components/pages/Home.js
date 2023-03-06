import React from "react";
import Avatar from "../../images/Ibrahim-Avatar.png";
import Devices from "../../images/devices.png";
import styles from "../../styles/Home.module.css"


function Home() {
  return (
    <div className={styles.homePage} >
      <div className={styles.title} >
      <h1>Ibrahim Mohamed</h1>
      <p>Frontend Developer</p>
      <img src={Avatar} alt="Avatar of me" />
      </div>
      <img src={Devices} className={styles.devices} alt="Pic of devices" />
      <div className={styles.about}>
      <h2>Hi, I'm Ibrahim. Nice to meet you.</h2>
      <p>I'm an aspiring web developer who is intrested
        in all things Javascript. I am currently undertaking the EDx Trilogy Skills
        Bootcamp in Front-End Web Development where I am learning the skills required
        to be a front end web developer. After completing the bootcamp I will be
        looking for opportunities to work with a Javascript framework. Besides coding,
        I enjoy playing and watching football & basketball, watching tv shows
        and travelling.</p>
      </div>
    </div>
  );
}

export default Home;
