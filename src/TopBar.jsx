export default function TopBar() {
  return (
    <nav className="nav-bar">
      <h2 className="titan-one-regular">Insurance Site</h2>
      <div className="options">
        <a href={`/ClaimList`} className="font-nunito">
          Claim List
        </a>
        <a href="/CreateClaim" className="font-nunito">
          Create Claim
        </a>
      </div>
    </nav>
  );
}
