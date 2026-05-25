function Header({ search, setSearch }) {
  return (
    <div className="header">
      <h1>TaskSync</h1>

      <input
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Header;