import { ClaimList } from "./Components/ClaimList";
import TopBar from "./TopBar";
import styles from "./Style/ClaimListPage.module.css";

function ClaimListPage() {
  return (
    <>
      <TopBar />
      <div className={styles["flex-container"]}>
        <ClaimList />
      </div>
    </>
  );
}

export default ClaimListPage;
