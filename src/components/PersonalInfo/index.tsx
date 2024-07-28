import React from "react";
import styles from "./PersonalInfo.module.scss";

const PersonalInfo: React.FC = () => {
  return (
    <div className={styles.personalInfo}>
      <h1>Yogesh Dipakkumar Bothara</h1>
      <p>
        <strong>Date of Birth:</strong> 09 December 1999
      </p>
      <p>
        <strong>Place of Birth:</strong> Yavatmal (Maharashtra)
      </p>
      <p>
        <strong>Time of Birth:</strong> 00:05 AM
      </p>
      <p>
        <strong>Height:</strong> 5 feet 10 inches
      </p>
      <p>
        <strong>Blood Group:</strong> AB+
      </p>
      <p>
        <strong>Profession:</strong> Engineer at Mercedes-Benz R&D India
      </p>
      <p>
        <strong>Qualification:</strong> M.Tech. in Industrial Automation (NIT
        Trichy)
      </p>
      <p>
        B.Tech. in Instrumentation Engineering (Gold Medalist) (GCOE Amravati)
      </p>
      <p>
        <strong>Current City:</strong> Bengaluru
      </p>
      <div className={styles.listContainer}>
        <p>
          <strong>Sakhe:</strong>
        </p>
        <ul>
          <li>Self - Bothara</li>
          <li>Mamaji- Kothari(Palrecha)</li>
          <li>Dadisa - Runwal</li>
          <li>Nanisa - Maloo</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <p>
          <strong>Hobbies:</strong>
        </p>
        <ul>
          <li>Traveling</li>
          <li>Playing Badminton</li>
          <li>Car and Bike Rides</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
