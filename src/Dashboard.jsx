import TopBar from "./TopBar";
import styles from "./Style/Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <TopBar />
      <div className={styles.dashboard}>
        <h1 className="titan-one-regular">Welcome To Insurance Claims</h1>
        <h4 className="titan-one-regular">
          here you can create and view claims
        </h4>
      </div>
    </>
  );
}
