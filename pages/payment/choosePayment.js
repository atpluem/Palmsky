import Nav from "../../components/Nav";

export default function choosePayment() {
    //javascript
    var countpage = 0;
    var validate = function () {
        if ($('#cardholder').val() == "" || $('#bill').val() == "" || $('#cardNumber').val() == "" || $('#exp').val() == "" || $('#cvv').val() == "") {
            $('#next').prop('disabled', true)
        } else {
            $('#next').prop('disabled', false)
        }
    }
    var nextclick = function () {

        if (countpage != 2 && ($('#creditcard').is(':checked') || $('#promptpay').is(':checked')))
            countpage = countpage + 1;

        if (countpage > 0) {
            $('#cancelbutton').hide();
            $('#backbutton').show();
        }

        if ($('#creditcard').is(':checked') && countpage == 1) {
            $('#choosepaymenttext').hide();
            $('#successpayment').hide();
            $('#paymentoption').hide();
            $('#creditcardtext').show();
            $('#creditform').show();
            $('#step2').addClass('active');

            if ($('#cardholder').val() == "" || $('#bill').val() == "" || $('#cardNumber').val() == "" || $('#exp').val() == "" || $('#cvv').val() == "") {
                $('#next').prop('disabled', true)
            } else {
                $('#next').prop('disabled', false)
            }

        }

        if ($('#promptpay').is(':checked') && countpage == 1) {
            $('#choosepaymenttext').hide();
            $('#successpayment').hide();
            $('#paymentoption').hide();
            $('#promptpayQRCODE').show();
            $('#next').prop('disabled', true);

            $('#step2').addClass('active');
            $('#step3').addClass('active');
        }

        if (countpage == 2) {
            $('#choosepaymenttext').hide();
            $('#creditcardtext').hide();
            $('#paymentoption').hide();
            $('#creditform').hide();
            $('#next').hide();
            $('#backbutton').hide();
            $('#promptpayQRCODE').hide();
            $('#continuousbutton').show();
            $('#successpayment').show();
            $('#step3').addClass('active');
            var savepayment = ""
            if ($('#savepayment').is(":checked")) {
                savepayment = 1;
            }
            var data = {
                cardholder: $('#cardholder').val(),
                bill: $('#bill').val(),
                cardNumber: $('#cardNumber').val(),
                exp: $('#exp').val(),
                cvv: $('#cvv').val(),
                savepayment: savepayment
            }
            console.log(data)
        }
    }
    var backclick = function () {
        console.log("backclick");
        countpage = countpage - 1;

        if (countpage == 0) {
            $('#next').prop('disabled', false);
            $('#backbutton').hide();
            $('#creditcardtext').hide();
            $('#creditform').hide();
            $('#promptpayQRCODE').hide();
            $('#choosepaymenttext').show();
            $('#cancelbutton').show();
            $('#paymentoption').show();

            $('#step2').removeClass('active');
            $('#step3').removeClass('active');

        }
        if ($('#creditcard').is(':checked') && countpage == 1) {
            $('#continuousbutton').hide();
            $('#successpayment').hide();
            $('#next').show();
            $('#backbutton').show();
            $('#creditcardtext').show();
            $('#creditform  ').show();

            $('#step3').removeAttr('active');
        }
        if ($('#promptpay').is(':checked') && countpage == 1) {
            $('#continuousbutton').hide();
            $('#successpayment').hide();

            $('#next').show();
            $('#backbutton').show();
            $('#promptpayQRCODE').show();
        }
    }

    var switchOption1 = function () {
        $('#creditcard').prop('checked', false);
        //
    }
    var switchOption2 = function () {
        $('#promptpay').prop('checked', false);
        //
    }
    //html
    return <div>
        <div>
            <Nav />
            <br></br>
            <div className="container" >
                <div id="stepwizard">
                    <div className="parent-div d-flex justify-content-center   " style={{ width: "100%", height: "90vh" }}>
                        <div style={{ width: "80%" }}>
                            <div className="row justify-content-center">
                                <div className="progressbar row justify-content-center" style={{ width: "500px", listStyleType: "none" }}>
                                    <li className="active" id="step1"></li>
                                    <li id="step2"></li>
                                    <li id="step3"></li>
                                </div>
                            </div>
                            {/* Header  */}
                            <div className="row justify-content-center" >
                                <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: "3.5vh" }} id="choosepaymenttext">
                                    Choose payment method
                                </div>
                                <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: "3.5vh", display: "none" }} id="creditcardtext">
                                    Enter your credit card
                                </div>
                            </div>

                            {/* Credit or Debit card  */}
                            <div className="row justify-content-center " style={{ paddingBottom: 10 }} id="paymentoption">
                                <div className="col-centered " style={{ paddingBottom: 10 }}>
                                    <label htmlFor="creditcard" className="card shadow " style={{ width: '20rem', height: '250px' }} id="credit_card" onClick={switchOption2}>
                                        <div className="card-body text-center">
                                            <div className="round" style={{ float: "right", paddingRight: "10px" }}>
                                                <input type="checkbox" id="creditcard" name="creditcard" value="1" />
                                                <label htmlFor="creditcard" />
                                            </div>
                                            <img src="/images/visa.png" alt="" style={{ height: "100px", marginTop: "15px" }} />
                                            <br />
                                            <label className="font-weight-bold" style={{ fontSize: 18 }}> Credit or Debit card</label>
                                        </div>
                                    </label>
                                </div>

                                {/* promptpay  */}
                                <div className="col-centered offset-md-1" >
                                    <label className="card shadow" style={{ width: '20rem', height: '250px' }} id="promtpay_card" htmlFor="promptpay" onClick={switchOption1}>
                                        <div className="card-body text-center" >
                                            <div className="round" style={{ float: "right", paddingRight: "10px" }}>
                                                <input type="checkbox" id="promptpay" name="promptpay" value="2" />
                                                <label htmlFor="promptpay" />
                                            </div>
                                            <img className="" src="/images/promptPay.png" alt="" style={{ height: "100px", marginTop: "15px" }} />
                                            <br />
                                            <label className="font-weight-bold" style={{ fontSize: 18 }}> PromptPay</label>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* creditcard form  */}
                            <div className="row justify-content-center" style={{ paddingBottom: 10, display: "none" }} id="creditform">
                                <div className="col " style={{ maxWidth: "500px" }}>
                                    <form>
                                        <div className="form-group row " >
                                            <img src="/images/visa.png" alt="" height={50} />
                                        </div>
                                        <div className="form-group row justify-content-center" >

                                            <input onChange={validate} id="cardholder" className="form-control" placeholder="Card Holder Name" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>

                                        <div className="form-group row justify-content-center" >
                                            <input onChange={validate} id="bill" className="form-control" placeholder="Billing Zip Code" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center">
                                            <input onChange={validate} id="cardNumber" className="form-control" placeholder="Card Number" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center" >
                                            <input onChange={validate} id="exp" className="form-control" placeholder="Expiration Date (MM/YY)" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center" >
                                            <input onChange={validate} id="cvv" className="form-control" placeholder="Security Code (CVV)" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row " >
                                            <div>
                                                <input type="checkbox" id="savepayment" name="savepayment" style={{ width: "15px", height: "15px", marginRight: "10px", cursor: "pointer" }} />
                                                <label htmlFor="savepayment" style={{ fontSize: 18, cursor: "pointer" }}>Save payment information</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* promtpay QRCODE  */}
                            <div className="row justify-content-center" style={{ paddingBottom: 10, display: "none" }} id="promptpayQRCODE">
                                <div className="col-centered " style={{ paddingBottom: 10 }}>
                                    <div className="card shadow" style={{ width: '20rem', borderWidth: "5px ", borderColor: "#AF0000", backgroundColor: "#AF0000" }}>
                                        <div className="font-weight-bold" style={{ padding: "20px", textAlign: "center", color: "white", fontSize: 22, height: "80px" }} >
                                            Scan QR Code Here
                                        </div>
                                        <div className="card-body text-center" style={{ backgroundColor: "White" }}>
                                            <img src="/images/promptpayQRCode.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-centered offset-1 " style={{ margin: "auto" }} >
                                    <form style={{ textAlign: "center" }}>
                                        <div className="form-group" >
                                            <label className="font-weight-bold" style={{ fontSize: "4.8vh" }}>TIME REMAINING</label>
                                        </div>
                                        <div className="form-group" >
                                            <label className="font-weight-bold" style={{ fontSize: "3.5vh", color: "red" }}>5 Minutes 50 Seconds</label>
                                        </div>
                                        <div className="form-group" style={{ padding: "2px" }}>
                                            <div className="card shadow " style={{ width: '40.0vh', borderWidth: "2px ", borderColor: "purple" }}>
                                                <div className="row ">
                                                    <div className="col-3 col-sm-3 " >
                                                        <img src="/images/scb-icon.png" alt="" style={{ width: "10.0vh", padding: "10px" }} />
                                                    </div>
                                                    <div className="col">
                                                        <label className="font-weight-bold" style={{ fontSize: "2.5vh" }}>ID : 10610705010021</label>
                                                        <label className="font-weight-bold" style={{ fontSize: "2.5vh" }}>NAME : PALMSKY</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* success */}
                            <div className="row justify-content-center" style={{ paddingBottom: 10, display: "none" }} id="successpayment">
                                <form>
                                    <div className="form-group row justify-content-center" >
                                        <img src="/images/successpayment.png" alt="" style={{ maxWidth: "250px" }} />
                                    </div>
                                    <div className="form-group row justify-content-center" >
                                        <label className="font-weight-bold" style={{ fontSize: 48, cursor: "pointer" }}>SUCCESS</label>
                                    </div>
                                    <div className="form-group row justify-content-center" style={{ marginTop: "-30px" }}>
                                        <label style={{ fontSize: 24, cursor: "pointer" }}>Payment has been completed</label>
                                    </div>
                                </form>
                            </div>


                            <div className="row justify-content-center ">
                                <div className="col-md-3 " style={{ width: "50%" }}>
                                    <button type="button" className="btn btn-outline-dark font-weight-bold" style={{ fontSize: 22, width: "100%" }} id="cancelbutton">
                                        Cancel
                                    </button>
                                    <button onClick={backclick} type="button " className="btn btn-outline-dark font-weight-bold" style={{ fontSize: 22, width: "100%", display: "none" }} id="backbutton">
                                        Back
                                    </button>
                                </div>

                                <div className="col-md-4 " style={{ width: "50%" }}>
                                    <button onClick={nextclick} type="button" className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#AF0000", fontSize: 22, width: "100%" }} id="next" >
                                        Next
                                    </button>
                                </div>
                                <button onClick={backclick} type="button " className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#AF0000", fontSize: 22, width: "100%", maxWidth: "400px", display: "none" }} id="continuousbutton">
                                    Continuous
                                    </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* css */}
        <style jsx>
            {`
            .card{
                cursor:pointer
            }
            
            .round {
            position: relative;                              
            }

            .round label {
            background-color: #fff;
            border: 2px solid #CD2424;
            border-radius: 50%;
            cursor: pointer;
            height: 35px;
            left: 0;
            position: absolute;
            top: 0;
            width: 35px;
            }

            .round label:after {
            border: 4.5px solid #CD2424;
            border-top: none;
            border-right: none;
            content: "";
            height: 10px;
            left: 7px;
            opacity: 0;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 16px;
            }

            .round input[type="checkbox"] {
            visibility: hidden;
            background-color: #FFF;
            }
                                                  
            .round input[type="checkbox"]:checked + label {
            background-color: #FFF;
            border-color: #CD2424;
            }
                                      
            .round input[type="checkbox"]:checked + label:after {                                  
            opacity: 1;
            }

            ::-webkit-input-placeholder {
                text-align: center;
             }
             

             .progressbar li{
                float: left;
                width: 33.33%;
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

    </div >




}