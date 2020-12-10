// import Router from 'next/dist/next-server/server/router'
import Header from "../components/Header"
import Router from "next/router"

export default function choosePayment() {
  var token = "";
  var login = function () {
    if ($("#email").val() != "" && $("#password").val() != "") {
      const authentication = {
        username: $("#email").val(),
        password: $("#password").val(),
      };
      // console.log(JSON.stringify(authentication))
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authentication),
      };
      fetch(
        `https://shielded-caverns-34585.herokuapp.com/api/login/`,
        requestOptions
      )
        .then((response) => {
          if (response.ok) {
            $("#invalid").hide();
            return response.json();
          } else {
            $("#invalid").show();
            document.getElementById("password").value=""
          }
        })
        .then((responseJson) => {
          token = responseJson;
          Router.push({
            pathname: "/Home",
            query: { id: token['token'] },
          });
          localStorage.setItem('id', token['token'])
        });
    } else {
      $("#invalid").show();
    }
  };
  return (
    <div>
      <div>
        <Header />
        <br></br>
        <div className="container">
          <div
            className="parent-div d-flex align-items-center justify-content-center"
            style={{ width: "100%", height: "90vh" }}
          >
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-5">
                <div className="row" style={{ marginLeft: "auto" }}>
                  <div className="col">
                    <label
                      className="font-weight-bold"
                      style={{ fontSize: 40, color: "#CD2424" }}
                    >
                      PALMSKY
                    </label>
                  </div>
                  <div className="w-100"></div>
                  <div className="col">
                    <label
                      className="font-weight-bold"
                      style={{ fontSize: 28, color: "#CD2424" }}
                    >
                      NEW EXPERIENCE OF ONLINE BOOK STORE
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  <div className="card shadow" style={{ width: "26rem" }}>
                    <div className="card-body">
                      <div className="form-group">
                        <label className="font-weight-bold">EMAIL</label>
                        <input
                          id="email"
                          className="form-control"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="font-weight-bold">PASSWORD</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                      <label
                        id="invalid"
                        style={{ color: "#CD2424", display: "none" }}
                      >
                        Please check your email or password
                      </label>
                      <div className="card-body text-center">
                        <a
                          onClick={login}
                          className="btn btn-danger font-weight-bold"
                          style={{
                            backgroundColor: "#AF0000",
                            width: "100%",
                            fontSize: 30,
                          }}
                        >
                          LOGIN
                        </a>
                        <small
                          className="form-text font-weight-bold"
                          style={{ color: "#CD2424", fontSize: 16 }}
                        >
                          FORGET PASSWORD?
                        </small>
                      </div>
                      <hr></hr>
                      <div className="card-body text-center">
                        <a
                          href="/signup/signup_home"
                          className="btn btn-danger font-weight-bold"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#CD2424",
                            borderColor: "#AF0000",
                            fontSize: 24,
                            width: "60%",
                          }}
                        >
                          SIGN UP
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
