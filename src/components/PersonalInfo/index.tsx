import styles from "./PersonalInfo.module.scss"

const PersonalInfo = () => {
  return (
    <div className={styles["personal-info"]}>
      <h1>Yogesh Dipakkumar Bothara</h1>
      <p>Date of Birth: 09 December 1999</p>
      <p>Place of Birth: Yavatmal (Maharashtra)</p>
      <p>Time of Birth: 00:05 AM</p>
      <p>Height: 5 feet 10 inches</p>
      <p>Blood Group: AB+</p>
      <p>Profession: Engineer at Mercedes-Benz R&D India</p>
      <p>Qualification: M.Tech. in Industrial Automation (NIT Trichy)</p>
      <p>B.Tech. in Instrumentation Engineering with Gold Medal from GCOE Amravati</p>
      <p>Current City: Bengaluru</p>
    </div>
  );
};

export default PersonalInfo;
