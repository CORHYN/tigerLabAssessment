import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../Style/CreateInput.module.css";

export default function ClaimInput({
  handleSubmit,
  handleChange,
  handleDecimalInput,
  decimalValidate,
  form,
  setForm,
}) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="claim-amount">Claim Amount</label>
      <input
        className={styles["non-date-field"]}
        type="text"
        name="amount"
        id="claim-amount"
        onChange={handleDecimalInput}
        pattern="^[0-9]*\.[0-9][0-9]$"
        required
      />
      {decimalValidate.amount ? (
        <span>Decimal value , max 2 decimal places</span>
      ) : null}
      <label htmlFor="holder-name">Holder Name</label>
      <input
        className={styles["non-date-field"]}
        type="text"
        name="holder"
        id="holder-name"
        onChange={handleChange}
        required
      />
      <label htmlFor="policy-number">Policy Number</label>
      <input
        className={styles["non-date-field"]}
        type="text"
        name="policyNumber"
        id="policy-number"
        onChange={handleChange}
        required
      />
      <label htmlFor="insured-item">Insured Item</label>
      <input
        className={styles["non-date-field"]}
        type="text"
        name="insuredName"
        id="insured-item"
        onChange={handleChange}
        required
      />

      <label htmlFor="description">Discription</label>
      <input
        className={styles["non-date-field"]}
        type="text"
        name="description"
        id="description"
        onChange={handleChange}
        required
      />
      <label htmlFor="processing-fee">Processing fee</label>
      <input
        className={styles["non-date-field"]}
        type="text"
        name="processingFee"
        id="processingF-fe"
        onChange={handleDecimalInput}
        pattern="^[0-9]*\.[0-9][0-9]$"
        required
      />
      {decimalValidate.processingFee ? (
        <span>Decimal value , max 2 decimal places</span>
      ) : null}
      <label htmlFor="incident-date">Incident Date</label>
      <DatePicker
        id="incident-date"
        name="incidentDate"
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChange={(date) => {
          setForm({
            ...form,
            incidentDate: date.toISOString().split("T")[0],
          });
          setStartDate(date);
        }}
        required
      />

      <button className={styles["submit-button"]}>Submit</button>
    </form>
  );
}

ClaimInput.propTypes = {
  handleChange: PropTypes.func,
  handleDecimalInput: PropTypes.func,
  handleSubmit: PropTypes.func,
  setForm: PropTypes.func,
  form: PropTypes.object,
  decimalValidate: PropTypes.object,
};
