import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Footer = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            this is a footer for this page.
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            developed
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            by
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            sharmony hashem shawon
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
