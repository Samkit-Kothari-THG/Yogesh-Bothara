import React from 'react';
import styles from './ContactInfo.module.scss';

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.contactInfo}>
      <h2>Contact Information</h2>
      <p><strong>Address:</strong> Deepak Dresses, Main Line, Ralegaon, Tq. Ralegaon, Dist. Yavatmal - 445402 (M.S.)</p>
      <div className={styles.listContainer}>
      <p><strong>Mobile Numbers:</strong></p>
      <ul>
        <li>Manoj Bothara: 7410785454</li>
        <li>Gautam Bothara: 7020445721</li>
        <li>Anoop Bothara: 9422271216</li>
      </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
