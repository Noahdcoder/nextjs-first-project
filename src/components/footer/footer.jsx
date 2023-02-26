export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <p>{`copyright © ${year} Noah Aghedo`}</p>
  </footer>
  )
}
