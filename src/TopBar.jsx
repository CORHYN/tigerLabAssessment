export default function TopBar() {
  return (
    <nav className="nav-bar">
      <a href="/">
        <img
          src="TigerLabAssessmentLogo.png"
          alt="Company Logo"
          style={{ marginLeft: "20px", width: "200px", height: "45px" }}
        />
      </a>
      <div className="options">
        <div className="option">
          <a href={`/ClaimList`} className="font-nunito">
            Claim List
          </a>
        </div>
        <div className="option">
          <a href="/CreateClaim" className="font-nunito">
            Create Claim
          </a>
        </div>
      </div>
    </nav>
  );
}
