import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Headerp = () => {
  return (
    <div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Header open
        </button>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
          <li>
            <button className="dorpdown-item" type="button">
              ITEM
            </button>
          </li>
          <li>
            <button className="dorpdown-item" type="button">
              aCTION
            </button>
          </li>
          <li>
            <button className="dorpdown-item" type="button">
              COMPONENTS
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headerp;
