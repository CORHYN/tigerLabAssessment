import { ClaimList } from "./Components/ClaimList";
import TopBar from "./TopBar";

function ClaimListPage() {
  return (
    <>
      <TopBar />
      <div className="flex-container">
        <ClaimList />
      </div>
    </>
  );
}

export default ClaimListPage;
