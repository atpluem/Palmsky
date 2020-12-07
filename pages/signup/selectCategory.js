import React from 'react';

const selectCategory = () => {
    return (
        <div className="row justify-content-center" >
            <form className="" style={{ width: "400px" }}>
                <div className="form-group">
                    <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: "2.5vh" }} >
                        Select Category
                    </div>

                    <hr />
                </div>
                <div className="form-group">

                    <div className="row justify-content-center">
                        <label htmlFor="cartoon" className="card shadow text-center " style={{ height: '4rem', width: '20rem', borderWidth: "2px ", borderColor: "#AF0000" }}>
                            <div className="row ">
                                <div className="col-9" style={{ textAlign: "center" }}>
                                    <label htmlFor="cartoon" className="font-weight-bold" style={{ fontSize: "20px", cursor: "pointer", paddingTop: "15px" }}>CARTOON</label>
                                </div>
                                <div className="col" style={{}}>
                                    <div className="round" style={{ paddingTop: "10px" }} >
                                        <input type="checkbox" id="cartoon" name="cartoon" />
                                        <label htmlFor="cartoon" />
                                    </div>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="magazine" className="card shadow text-center " style={{ height: '4rem', width: '20rem', borderWidth: "2px ", borderColor: "#AF0000" }}>
                            <div className="row ">
                                <div className="col-9" style={{ textAlign: "center" }}>
                                    <label htmlFor="magazine" className="font-weight-bold" style={{ fontSize: "20px", cursor: "pointer", paddingTop: "15px" }}>MAGAZINE</label>
                                </div>
                                <div className="col" style={{}}>
                                    <div className="round" style={{ paddingTop: "10px" }} >
                                        <input type="checkbox" id="magazine" name="magazine" />
                                        <label htmlFor="magazine" />
                                    </div>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="education" className="card shadow text-center " style={{ height: '4rem', width: '20rem', borderWidth: "2px ", borderColor: "#AF0000" }}>
                            <div className="row ">
                                <div className="col-9" style={{ textAlign: "center" }}>
                                    <label htmlFor="education" className="font-weight-bold" style={{ fontSize: "20px", cursor: "pointer", paddingTop: "15px" }}>EDUCATION</label>
                                </div>
                                <div className="col" style={{}}>
                                    <div className="round" style={{ paddingTop: "10px" }} >
                                        <input type="checkbox" id="education" name="education" />
                                        <label htmlFor="education" />
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label htmlFor="fiction" className="card shadow text-center " style={{ height: '4rem', width: '20rem', borderWidth: "2px ", borderColor: "#AF0000" }}>
                            <div className="row ">
                                <div className="col-9" style={{ textAlign: "center" }}>
                                    <label htmlFor="fiction" className="font-weight-bold" style={{ fontSize: "20px", cursor: "pointer", paddingTop: "15px" }}>FICTION</label>
                                </div>
                                <div className="col" style={{}}>
                                    <div className="round" style={{ paddingTop: "10px" }} >
                                        <input type="checkbox" id="fiction" name="fiction" />
                                        <label htmlFor="fiction" />
                                    </div>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="news" className="card shadow text-center " style={{ height: '4rem', width: '20rem', borderWidth: "2px ", borderColor: "#AF0000" }}>
                            <div className="row ">
                                <div className="col-9" style={{ textAlign: "center" }}>
                                    <label htmlFor="news" className="font-weight-bold" style={{ fontSize: "20px", cursor: "pointer", paddingTop: "15px" }}>NEWS</label>
                                </div>
                                <div className="col" style={{}}>
                                    <div className="round" style={{ paddingTop: "10px" }} >
                                        <input type="checkbox" id="news" name="news" />
                                        <label htmlFor="news" />
                                    </div>
                                </div>
                            </div>
                        </label>

                        <label htmlFor="documentary" className="card shadow text-center " style={{ height: '4rem', width: '20rem', borderWidth: "2px ", borderColor: "#AF0000" }}>
                            <div className="row ">
                                <div className="col-9" style={{ textAlign: "center" }}>
                                    <label htmlFor="documentary" className="font-weight-bold" style={{ fontSize: "20px", cursor: "pointer", paddingTop: "15px" }}>DOCUMENTARY</label>
                                </div>
                                <div className="col" style={{}}>
                                    <div className="round" style={{ paddingTop: "10px" }} >
                                        <input type="checkbox" id="documentary" name="documentary" />
                                        <label htmlFor="documentary" />
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>

                </div>
            </form>

            <style jsx>
                {`
            .card{
                cursor:pointer
            }
            .round {
                                           
                }
    
                .round label {
                background-color: #fff;
                border: 1px solid #CD2424;
                border-radius: 50%;
                cursor: pointer;
                height: 40px;
                left: 0;
                position: absolute;
               
                width: 40px;
                }
    
                .round label:after {
                border: 5px solid #CD2424;
                border-top: none;
                border-right: none;
                content: "";
                height: 11px;
                left: 8px;
                opacity: 0;
                position: absolute;
                top: 11px;
                transform: rotate(-45deg);
                width: 20px;
                border-radius: px;
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

           `}
            </style>
        </div>


    )
}

export default selectCategory