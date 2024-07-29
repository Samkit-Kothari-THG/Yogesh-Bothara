import React from 'react';
import styles from './PhotoFrame.module.scss';
import image1 from "../../assets/img-1.jpg"
import image2 from "../../assets/img-2.jpg"
const PhotoFrame: React.FC = () => {
  return (
    <div className={styles.photoFrameContainer}>
      <div className={styles.photoFrame}>
        <img src={image1} alt="Yogesh Dipakkumar Bothara" />
      </div>
      <div className={styles.photoFrame}>
        <img src={image2} alt="Yogesh Dipakkumar Bothara" />
      </div>
    </div>
  );
};

export default PhotoFrame;
