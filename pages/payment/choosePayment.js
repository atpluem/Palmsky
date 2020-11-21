import Header from '../../components/Header';
import Nav from "../../components/Nav";

export default function choosePayment() {
    //javascript
    var countpage = 0;
    var nextclick = function () {
        if (countpage != 2)
            countpage = countpage + 1;

        if (countpage > 0) {
            $('#cancelbutton').hide();
            $('#backbutton').show();
        }
        if (countpage == 1) {
            $('#choosepaymenttext').hide();
            $('#successpayment').hide();
            $('#paymentoption').hide();

            $('#creditcardtext').show();
            $('#creditform').show();
        }
        if (countpage == 2) {
            $('#choosepaymenttext').hide();
            $('#creditcardtext').hide();
            $('#paymentoption').hide();
            $('#creditform').hide();
            $('#next').hide();
            $('#backbutton').hide();

            $('#continuousbutton').show();
            $('#successpayment').show();
        }


    }
    var backclick = function () {
        console.log("backclick");
        countpage = countpage - 1;

        if (countpage == 0) {
            $('#backbutton').hide();
            $('#creditcardtext').hide();
            $('#creditform').hide();

            $('#choosepaymenttext').show();
            $('#cancelbutton').show();
            $('#paymentoption').show();

        }
        if (countpage == 1) {
            $('#continuousbutton').hide();
            $('#next').show();
            $('#backbutton').show();

            $('#successpayment').hide();
            $('#creditcardtext').show();
            $('#creditform  ').show();
        }
    }
    //html
    return <div>
        <div>
            <Header />
            <Nav />
            <br></br>
            <div className="container" >
                <div id="stepwizard">
                    <div className="parent-div d-flex justify-content-center   " style={{ width: "100%", height: "90vh" }}>
                        <div style={{ width: "80%" }}>
                            <div className="row">
                                <div className="col ">
                                    Stepper progress bar
                            </div>
                            </div>
                            {/* Header  */}
                            <div className="row justify-content-center" >
                                <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: 22 }} id="choosepaymenttext">
                                    Choose payment method
                                </div>
                                <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: 22, display: "none" }} id="creditcardtext">
                                    Enter your credit or debit card
                                </div>
                            </div>

                            {/* Credit or Debit card  */}
                            <div className="row justify-content-center " style={{ paddingBottom: 10 }} id="paymentoption">
                                <div className="col-centered " style={{ paddingBottom: 10 }}>
                                    <label htmlFor="creditcard" className="card shadow " style={{ width: '20rem' }} id="credit_card">
                                        <div className="card-body text-center">
                                            <div className="round">
                                                <input type="checkbox" id="creditcard" name="creditcard" value="1" />
                                                <label htmlFor="creditcard" />
                                            </div>
                                            <img src="/images/visa.png" alt="" height={100} />
                                            <br />
                                            <label className="font-weight-bold" style={{ fontSize: 18 }}> Credit or Debit card</label>
                                        </div>
                                    </label>
                                </div>

                                {/* promptpay  */}
                                <div className="col-centered offset-md-1" >
                                    <label className="card shadow" style={{ width: '20rem' }} id="promtpay_card" htmlFor="promptpay">
                                        <div className="card-body text-center" >
                                            <div className="round">
                                                <input type="checkbox" id="promptpay" name="promptpay" value="2" />
                                                <label htmlFor="promptpay" />
                                            </div>
                                            <img className="" src="/images/promptPay.png" alt="" height={100} />
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

                                            <input className="form-control" placeholder="Card Holder Name" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center" >

                                            <input className="form-control" placeholder="Card Holder Name" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center" >
                                            <input className="form-control" placeholder="Billing Zip Code" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center">
                                            <input className="form-control" placeholder="Card Number" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center" >
                                            <input className="form-control" placeholder="Expiration Date (MM/YY)" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row justify-content-center" >
                                            <input className="form-control" placeholder="Security Code (CVV)" style={{ fontSize: 24, maxWidth: "500px" }} />
                                        </div>
                                        <div className="form-group row " >
                                            <div>
                                                <input type="checkbox" id="savepayment" name="savepayment" value="1" style={{ width: "15px", height: "15px", marginRight: "10px", cursor: "pointer" }} />
                                                <label htmlFor="savepayment" style={{ fontSize: 18, cursor: "pointer" }}>Save payment information</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row justify-content-center" style={{ paddingBottom: 10, display: "none" }} id="successpayment">
                                <form>
                                    <div className="form-group row justify-content-center" >
                                        <img src="/images/successpayment.png" alt="" style={{ width: "85%" }} />
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
                                    <a onClick={nextclick} className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#AF0000", fontSize: 22, width: "100%" }} id="next">
                                        Next
                                    </a>
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
            border: 1px solid #CD2424;
            border-radius: 50%;
            cursor: pointer;
            height: 28px;
            left: 0;
            position: absolute;
            top: 0;
            width: 28px;
            }

            .round label:after {
            border: 3px solid #CD2424;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 7px;
            opacity: 0;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
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
             
           `}
        </style>

    </div >




}