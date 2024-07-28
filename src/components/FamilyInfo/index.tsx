import React from 'react';
import styles from './FamilyInfo.module.scss';

const FamilyInfo: React.FC = () => {
  return (
    <div className={styles.familyInfo}>
      <h2>Family Details</h2>
      <p><strong>Father:</strong> Late. Dipak Bhawarilalji Bothara</p>
      <p><strong>Mother:</strong> Snehal Dipakkumarji Bothara</p>
      <p><strong>Dadasa:</strong> Late. Bhawarilalji (Lalaji) Pukhrajji Bothara</p>
      <p><strong>Dadisa:</strong> Late. Smt. Leelabai Bhawarilalji Bothara</p>
      <p><strong>Uncles:</strong></p>
      <ul>
        <li>Manoj Bhawarilalji Bothara (Ralegaon) - Businessman</li>
        <li>Gautam Bhawarilalji Bothara (Yavatmal) - Insurance Advisor</li>
        <li>Anoop Bhawarilalji Bothara (Nashik) - Chartered Accountant</li>
      </ul>
    </div>
  );
};

export default FamilyInfo;
