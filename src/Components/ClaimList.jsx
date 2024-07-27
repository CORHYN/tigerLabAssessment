import { useQuery } from "@tanstack/react-query";
import styles from "../Style/ClaimList.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function ClaimList() {
  const { data, error, isPending } = useQuery({
    queryKey: ["searchWord"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8001/claims");
      return data;
    },
  });

  const [searchValue, setSearchValue] = useState("");
  const [claims, setClaims] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (data) {
      setClaims(data);
    }
  }, [data]);

  const tableItem = (
    {
      id,
      number,
      incidentDate,
      createdAt,
      amount,
      holder,
      policyNumber,
      insuredItem,
      description,
      processingFee,
      status,
    },
    index
  ) => {
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{number}</td>
        <td>{incidentDate}</td>
        <td>{createdAt}</td>
        <td>{amount}</td>
        <td>{holder}</td>
        <td>{policyNumber}</td>
        <td>{insuredItem}</td>
        <td>{description}</td>
        <td>{processingFee}</td>
        <td>{status}</td>
      </tr>
    );
  };

  if (isPending) {
    return <div className={styles.loading}>Loading ...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>An Error Occurred: {error.message}</div>
    );
  }

  return (
    <>
      <div className={styles.flex}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const lowercasedSearchValue = searchValue.toLowerCase();
            const filtered = data.filter((claim) => {
              const matchesSearchValue =
                String(claim.id).toLowerCase() === lowercasedSearchValue ||
                claim.holder.toLowerCase().includes(lowercasedSearchValue) ||
                String(claim.policyNumber).toLowerCase() ===
                  lowercasedSearchValue;
              const matchesStatus = filter === "" || claim.status === filter;
              return matchesSearchValue && matchesStatus;
            });

            setClaims(filtered);
          }}
        >
          <input
            type="text"
            id="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
        <select
          id="status"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            if (e.target.value !== "") {
              setClaims(
                data.filter((claim) => claim.status === e.target.value)
              );
            } else {
              setClaims(data);
            }
          }}
        >
          <option value="">All Statuses</option>
          <option value="Submitted">Submitted</option>
          <option value="Approved">Approved</option>
          <option value="Processed">Processed</option>
          <option value="Completed">Completed</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <table className="font-nunito">
        <thead>
          <tr>
            <th>ID</th>
            <th>Number</th>
            <th>Incident Date</th>
            <th>Created At</th>
            <th>Amount</th>
            <th>Holder</th>
            <th>Policy Number</th>
            <th>Insured Item</th>
            <th>Description</th>
            <th>Processing Fee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{claims && claims.map(tableItem)}</tbody>
      </table>
    </>
  );
}
