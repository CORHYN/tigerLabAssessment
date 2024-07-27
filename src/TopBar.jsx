export default function TopBar() {
  return (
    <nav className="nav-bar">
      <h2 style={{ ["padding-left"]: "20px" }} className="titan-one-regular">
        Insurance Site
      </h2>
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
