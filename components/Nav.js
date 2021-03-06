import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"

const Navbar = ({ indexPage }) => {
  const router = useRouter()
  const [search, setSearch] = useState("");

  const onLogOut = () => {
    localStorage.setItem("id", "");
    $(loginBtn).show();
    $(registerBtn).show();
  };

  const onEnter = (e) => {
    if (e.which == 13) {
      e.preventDefault();
      router.push({
        pathname: "/category/library",
        query: { search: search },
      });
    }
  };

  const onSearch = () => {
    router.push({
      pathname: "/category/library",
      query: { search: search },
    });
  };

  useEffect(() => {
    if (localStorage.getItem("id") != "") {
      $(loginBtn).hide();
      $(registerBtn).hide();
    } else {
      $(loginBtn).show();
      $(registerBtn).show();
      $(accountIcon).hide();
      $(cartIcon).hide();
    }

    if(localStorage.getItem('id') == router.query.id) {
      window.location.reload(0.2)
    }

  }, []);


  const passOption = (option) => {
    router.push({
      pathname: "/profile/userPage",
      query: {option: option}
    })
  } 


  return (
    <div
      style={{
        position: "-webkit-sticky",
        position: "sticky",
        top: 0,
        zIndex: 2,
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <a className="navbar-brand" href="/Home">
          PALMSKY
        </a>

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
              <a className={ indexPage === 1 ? "nav-link font-weight-bold" : "nav-link" } href="/Home">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className={ indexPage === 2 ? "nav-link font-weight-bold text-dark" : "nav-link" } href="/category/library">
                LIBRARY
              </a>
            </li>
          </ul>

          <form className="form-inline">
            <div className="search-box">
              <input
                onChange={(event) => setSearch(event.target.value)}
                className="search-txt form-control"
                type="text"
                placeholder="Type to search"
                onKeyPress={(e) => onEnter(e)}
              />
              <a
                id="searchIcon"
                className="search-btn"
                style={{ cursor: "pointer" }}
                onClick={onSearch}
              >
                <i className="fas fa-search"></i>
              </a>
            </div>
          </form>

          <div id="cartIcon" className="nav-item">
            <a className="cart-btn" href="/Cart">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>

          <div id="accountIcon" className="nav-item">
            <a
              className="nav-link dropdown-toggle profile-btn"
              href="#"
              id="navbarDropdown"
              data-toggle="dropdown"
            >
              <i className="fas fa-user"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
              style={{ backgroundColor: "#CD2424" }}
            >
              <a className="dropdown-item text-white hover-select" type="button" onClick={() => {passOption(2)}}>
                Account Management
              </a>
              <a className="dropdown-item text-white hover-select" type="button" onClick={() => {passOption(0)}}>
                My Store
              </a>
              <a className="dropdown-item text-white hover-select" type="button" onClick={() => {passOption(1)}}>
                History
              </a>
              <div className="dropdown-divider" style={{ borderColor: "#781414" }}></div>
              <a
                className="dropdown-item text-white hover-select"
                href="/Home"
                onClick={onLogOut}
                style={{ cursor: "pointer" }}
              >
                Sign Out
              </a>
            </div>
          </div>

          <div
            id="loginBtn"
            className="nav-item"
            style={{ fontWeight: "bolder", display: "none" }}
          >
            <a className="nav-link" href="/login">
              LOGIN
            </a>
          </div>

          <div
            id="registerBtn"
            className="nav-item"
            style={{ display: "none" }}
          >
            <a href="/signup/signup_home">
              <button
                type="button"
                className="btn btn-outline-dark"
                style={{ fontWeight: "bolder" }}
              >
                REGISTER
              </button>
            </a>
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
          line-height: 40px;
          transition: 0.4s;
        }
        
        .search-box:hover > .search-btn {
          background: white;
        }
        .cart-btn {
          padding: 15px;
          color: #666666;
        }
        .profile {
          margin-right: 40px;
        }
        .profile-btn {
          color: #666666;
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