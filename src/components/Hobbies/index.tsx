import React from 'react';
import styles from './Hobbies.module.scss';

const Hobbies: React.FC = () => {
  return (
    <div className={styles.hobbies}>
      <h2>Hobbies</h2>
      <p>Traveling</p>
      <p>Playing Badminton</p>
      <p>Car and Bike Rides</p>
    </div>
  );
};

export default Hobbies;
