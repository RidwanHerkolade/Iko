export default function Authlayout() {
  return (
    <div>
      <header>
        <nav>Shared Navigation for Auth Pages</nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Shared Footer Content</p>
      </footer>
    </div>
  );
}
