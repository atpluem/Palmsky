import Profile from './profile';
import Category from './selectCategory';
import Success from './sucess'
export default function singup_home() {

    var countpage = 0;
    var validate = 0;
    var validateform = function () {
        //first page
        $('#next').prop('disabled', false);
        if (countpage == 0 && ($('#email').val() != "" && $('#password').val() != "" && $('#confpassword').val() != "")
            && ($('#password').val() == $('#confpassword').val())) {
            $('#next').prop("disabled", false);
            validate = 1;
        } else {
            $('#next').prop("disabled", true);
            validate = 0;
        }
        if ($('#password').val() != $('#confpassword').val()) {
            $('#passmatch').show();
        } else {
            $('#passmatch').hide();
        }


    }
    var nextclick = function () {
        if (validate == 0) {
            $('#next').prop("disabled", true);
        } else {
            if (countpage != 3) {
                countpage = countpage + 1;
            }

            console.log(countpage);

            if (countpage == 1) {
                $('#step2').addClass("active");
                $('#profile').show();
                $('#backbutton').show();

                $('#cancelbutton').hide();
                $('#first').hide();
            }

            if (countpage == 2) {
                $('#step3').addClass("active");
                $('#profile').hide();
                $('#category').show();
            }
            if (countpage == 3) {
                $('#step4').addClass("active");
                $('#continuous').show();
                $('#success').show();
                $('#next').hide();
                $('#backbutton').hide();
                $('#category').hide();
                //prep data
                var birth = null;
                var notification = false;
                if ($('#notify').is(':checked')) {
                    notification = true;
                }
                if ($("#day option:selected").val() != "" && $("#month option:selected").val() != "" && $("#year option:selected").val() != "") {
                    birth = $("#year option:selected").val() + "-" + $("#month option:selected").val() + "-" + $("#day option:selected").val()
                }

                var data =
                {
                    email: $('#email').val(),
                    password: $('#password').val(),
                    firstName: $('#name').val(),
                    lastName: $('#lastname').val(),
                    phone: $('#phoneNo').val(),
                    dateOfBirth: birth,
                    gender: $("#gender option:selected").val(),
                    addressName: $('#address').val(),
                    street: "",
                    subDistrict: "",
                    province: $('#province').val(),
                    district: $('#district').val(),
                    zipcode: $('#zipcode').val(),
                    mailingAllow: notification,
                }
                //JSON.stringify(data)
                console.log(JSON.stringify(data));

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                };
                fetch('https://shielded-caverns-34585.herokuapp.com/api/account/', requestOptions)


            }
        }


    }
    var backclick = function () {
        countpage = countpage - 1;
        if (countpage == 0) {
            $('#cancelbutton').show();
            $('#first').show();
            $('#profile').hide();
            $('#backbutton').hide();
            $('#step2').removeClass("active");
        }
        if (countpage == 1) {
            $('#profile').show();
            $('#category').hide();
            $('#step3').removeClass("active");
        }
        if (countpage == 2) {
            $('#step4').removeClass("active");
            $('#category').show();
            $('#success').hide();
        }

    }
    return <div>
        <div>
            <div className="container" >
                <div className="parent-div d-flex justify-content-center   " style={{ width: "100%", height: "90vh" }}>
                    <div style={{ width: "80%" }}>

                        <div className="row justify-content-center  " >

                            <div className="progressbar " style={{ width: "500px", listStyleType: "none" }}>
                                <li className="active" id="step1"></li>
                                <li id="step2"></li>
                                <li id="step3"></li>
                                <li id="step4"></li>
                            </div>

                        </div>
                        <div id="first">
                            <div className="row justify-content-center" >
                                <form className="" style={{ width: "400px" }} >
                                    <div className="form-group">
                                        <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: "24px" }} >
                                            Sign Up
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <div style={{ fontSize: "14px" }} >
                                            Register new account
                                    </div>
                                        <hr />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={validateform} type="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={validateform} type="password" className="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={validateform} type="password" className="form-control" id="confpassword" placeholder="Confirm Password" />
                                        <label id="passmatch" style={{ fontSize: "12px", color: "#CD2424", display: "none" }}>Password and Confirm password does not match</label>
                                        <hr />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="profile" style={{ display: "none" }}>
                            <Profile />
                        </div>
                        <div id="category" style={{ display: "none" }}>
                            <Category />
                        </div>
                        <div id="success" style={{ display: "none" }}>
                            <Success />
                        </div>
                        <div className="row justify-content-center ">
                            <form className="row" style={{ maxWidth: "400px", width: "100%" }}>
                                <a href="../../login" style={{ width: "100%" }}>
                                    <button type="button" className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#AF0000", fontSize: 22, width: "100%", display: "none" }} id="continuous" >
                                        Continuous
                                </button>
                                </a>
                            </form>
                        </div>
                        <div className="row justify-content-center ">
                            <form className="row" style={{ width: "400px" }}>
                                <div className="col " >
                                    <a href="../../login">
                                        <button type="button" className="btn btn-outline-dark font-weight-bold" style={{ fontSize: 22, width: "100%" }} id="cancelbutton">
                                            Cancel
                                    </button>
                                    </a>
                                    <button onClick={backclick} type="button" className="btn btn-outline-dark font-weight-bold" style={{ fontSize: 22, width: "100%", display: "none" }} id="backbutton">
                                        Back
                                    </button>
                                </div>
                                <div className="col ">
                                    <button onClick={nextclick} type="button" className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#AF0000", fontSize: 22, width: "100%" }} id="next" >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>
            {`
               .progressbar li{
                float: left;
                width: 25%;
                text-align: center;
                position:relative;
              }
              .progressbar{
                counter-reset: step;
              }
              .progressbar li:before{
                content:counter(step);
                counter-increment: step;
                  border-radius: 50%;
                  width: 40px;
                  height: 40px;
                  display: block;
                  background: #D3D3D3;
                  margin: 40px auto 40px auto;
                  color:white;
                  text-align: center;
                  font-weight: bold;
                  line-height: 40px;
                  font-size:18px
              }
              .progressbar li:after{
               
                width: 100%;
                height: 3px;
                content: '';
                position: absolute;
                background-color: #D3D3D3;
                top: 58px;
                left: -50%;
                z-index: -1;
              }
              .progressbar li:first-child:after{
                content: none;
            }
            .progressbar li.active:before {
                background-color: #CD2424;
            }
            .progressbar li.active + li:after {
                background-color: #CD2424;
            }
        
                
                `}
        </style>
    </div>
}