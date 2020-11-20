import Header from './Header'
import Navbar from './Nav'
export default function choosePayment() {
    return <div>
        <div>
            <Header />
            <br></br>
            <div className="container" >
                <div className="parent-div d-flex align-items-center justify-content-center" style={{ width: "100%", height: "90vh" }}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-5">
                            <div className="row" style={{ marginLeft: "auto" }}>
                                <div className="col" >
                                    <label className="font-weight-bold" style={{ fontSize: 40, color: "#CD2424" }}>PALMSKY</label>
                                </div>
                                <div className="w-100"></div>
                                <div className="col">
                                    <label className="font-weight-bold" style={{ fontSize: 28, color: "#CD2424" }}>NEW EXPERIENCE OF ONLINE BOOK STORE</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <div className="card shadow" style={{ width: '26rem' }}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="font-weight-bold">USERNAME</label>
                                            <input className="form-control" style={{ fontSize: 24 }} />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-bold" >PASSWORD</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" style={{ fontSize: 24 }} />
                                        </div>
                                        <div className="card-body text-center">
                                            <a className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#AF0000", width: "100%", fontSize: 30 }}>LOGIN</a>
                                            <small className="form-text font-weight-bold" style={{ color: "#CD2424", fontSize: 16 }}>FORGET PASSWORD?</small>
                                        </div>
                                        <hr></hr>
                                        <div className="card-body text-center">
                                            <a className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#FFFFFF", color: "#CD2424", borderColor: "#AF0000", fontSize: 24, width: "60%" }}>SIGN UP</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div >
}