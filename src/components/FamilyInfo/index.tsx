import styles from "./FamilyInfo.module.scss"

const FamilyInfo = () => {
  return (
    <div className={styles["family-info"]}>
      <h2>Family Details</h2>
      <p>Father: Late. Dipak Bhawarilalji Bothara</p>
      <p>Mother: Snehal Dipakkumarji Bothara</p>
      <p>... (other family details)</p>
    </div>
  );
};

export default FamilyInfo;
