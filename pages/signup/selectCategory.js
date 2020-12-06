import React from 'react'

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
                        <label htmlFor="cartoon" className="card shadow text-center " style={{ height: '8.0vh', width: '35.0vh', borderWidth: "2px ", borderColor: "#AF0000" }}>
                            <div className="row ">
                                <div className="col-9" style={{padding:"1.8vh",textAlign:"center"}}>
                                    <label htmlFor="cartoon" className="font-weight-bold" style={{ fontSize: "2.5vh", cursor: "pointer" }}>CARTOON</label>
                                </div>
                                <div className="col" style={{ padding:"1.8vh" }}>
                                    <div className="round" >
                                        <input type="checkbox" id="cartoon" name="cartoon" value="1" />
                                        <label htmlFor="cartoon" />
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
            position: relative;                              
            }

            .round label {
            background-color: #fff;
            border: 1px solid #CD2424;
            border-radius: 50%;
            cursor: pointer;
            height: 40px;
            left: 0;
            position: absolute;
            top: 0;
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
            border-radius: 50%;
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