import styles from "./ContactInfo.module.scss"

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>Address: Deepak Dresses, Main Line, Ralegaon, Tq. Ralegaon, Dist. Yavatmal - 445402 (M.S.)</p>
      <p>Mobile Numbers:</p>
      <ul>
        <li>Manoj Bothara: 7410785454</li>
        <li>Gautam Bothara: 7020445721</li>
        <li>Anoop Bothara: 9422271216</li>
      </ul>
    </div>
  );
};

export default ContactInfo;
