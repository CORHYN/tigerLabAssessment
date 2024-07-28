import TopBar from "./TopBar";
import { useState } from "react";
import ClaimInput from "./Components/ClaimInput";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import styles from "./Style/CreateClaimPage.module.css";
import { Navigate } from "react-router-dom";

export default function CreateClaimPage() {
  const [decimalValidate, setdecimalValidate] = useState({
    amount: false,
    processingFee: false,
  });

  const [form, setForm] = useState({
    amount: "",
    holder: "",
    policyNumber: "",
    insuredName: "",
    discription: "",
    processingFee: "",
    incidentDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDecimalInput = (e) => {
    if (e.target.validity.patternMismatch && e.target.value !== "") {
      setdecimalValidate({ ...decimalValidate, [e.target.name]: true });
    } else {
      setdecimalValidate({ ...decimalValidate, [e.target.name]: false });
      handleChange(e);
    }
  };

  const mutation = useMutation({
    mutationFn: (newClaim) => {
      return axios.post("http://localhost:8001/api/v1/claims", newClaim);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClaim = Object.fromEntries(new FormData(e.currentTarget));
    console.log(newClaim);
    mutation.mutate(newClaim);
  };

  if (mutation.isSuccess) {
    return <Navigate to="/ClaimList" />;
  }
  return (
    <>
      <TopBar />
      <div className={styles["flex-container"]}>
        <h2>Create New Claim</h2>
        <ClaimInput
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleDecimalInput={handleDecimalInput}
          decimalValidate={decimalValidate}
          form={form}
          setForm={setForm}
        />
      </div>
    </>
  );
}
