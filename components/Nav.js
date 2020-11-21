import Link from "next/link";

const Navbar = () => {
  return (
    <div style = {{ position: '-webkit-sticky', position: "sticky", top: 0, zIndex: 2 }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/Home">
          <a className="navbar-brand">PALMSKY</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/Home">
                <a className="nav-link" href="#">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Library">
                <a className="nav-link" href="#">
                  LIBRARY
                </a>
              </Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <div className="search-box">
              <input
                className="search-txt form-control"
                type="text"
                placeholder="Type to search"
              />
              <a className="search-btn" href="#">
                <i className="fas fa-search"></i>
              </a>
            </div>
          </form>

          <div className="nav-item">
            <a className="cart-btn" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>

          <div className="nav-item">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              data-toggle="dropdown"
            >
              <i className="fas fa-user"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Account Management
              </a>
              <a className="dropdown-item" href="#">
                My Store
              </a>
              <a className="dropdown-item" href="#">
                History
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .search-box {
          height: 60px;
          padding: 10px;
        }
        .search-btn {
          color: #666666;
          float: right;
          width: 40px;
          height: 40px;
          margin-left: 10px;
          border-redius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.4s;
        }
        .search-txt {
          border: none;
          outline: none;
          float: left;
          margin-bottom: 10px;
          padding: 0;
          width: 0px;
          line-height: 40px;
          transition: 0.4s;
        }
        .search-box:hover > .search-txt {
          width: 240px;
          padding: 0 6 px;
        }
        .search-box:hover > .search-btn {
          background: white;
        }
        .cart-btn {
          color: #666666;
        }
        .profile {
          margin-right: 40px;
        }
        .navbar-brand {
          color: #cd2424;
          font-weight: bold;
        }
        .navbar-brand:hover {
          color: #af0000;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};
export default Navbar;
