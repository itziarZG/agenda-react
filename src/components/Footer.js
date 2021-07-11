import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
      <Link className="footer_info" to="/info">
        ?
      </Link>
      <a href="https://marga.pro/">Design by: Marga Martínez</a>
      <p class="copyright">
        {" "}
        <a href="https://marga.pro/">ItziarZG </a>&{" "}
        <a href="https://marga.pro/">MargaM </a>© 2021
      </p>
    </footer>
  );
}
