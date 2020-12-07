import React from 'react'

const profile = () => {

    var dob = function () {
        console.log($("#day option:selected").text())
    }
    var upload = function () {
        console.log('asdasd');
        $('#inpimage').trigger('click')
    }

    var preview = function (e) {

        if (e.target.files && e.target.files[0]) {
            console.log($('#inpimage').val())
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#image').attr('src', e.target.result);
                $('#image').val(e.target.result)
                
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    return (
        <div className="row justify-content-center" >
            <form className="" style={{ width: "400px" }} id="first">
                <div className="form-group">
                    <div className="row justify-content-center" >
                        <img src="/images/account.png" value="" id="image" style={{ maxWidth: "200px", maxHeight: "200px", cursor: "pointer" }} onClick={upload} />
                        <input type="file" id="inpimage" name="inpimage" accept="image/png" onChange={preview} style={{ display: "none" }} />
                    </div>
                </div>
                <div className="form-group">
                    <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: "24px" }} >
                        Your Profile
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ fontSize: "14px" }} >
                        Create your account
                    </div>
                    <hr />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="lastname" placeholder="Last name" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="phoneNo" placeholder="Mobile Phone Number" />
                </div>
                <div className="form-group">
                    <div style={{ fontSize: "14px" }} >
                        Date of birth
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <select id="day" className="btn dropdown-toggle" placeholder="Day" style={{ opacity: "70%", borderColor: "#ccc", width: "100%" }} onChange={dob}>
                                <option value="" hidden>Day</option>
                                <option value = "01"className="dropdown-item">1</option>
                                <option value = "02" className="dropdown-item">2</option>
                                <option value = "03" className="dropdown-item">3</option>
                                <option value = "04" className="dropdown-item">4</option>
                                <option value = "05" className="dropdown-item">5</option>
                                <option value = "06" className="dropdown-item">6</option>
                                <option value = "07" className="dropdown-item">7</option>
                                <option value = "08" className="dropdown-item">8</option>
                                <option value = "09" className="dropdown-item">9</option>
                                <option className="dropdown-item">10</option>
                                <option className="dropdown-item">11</option>
                                <option className="dropdown-item">12</option>
                                <option className="dropdown-item">13</option>
                                <option className="dropdown-item">14</option>
                                <option className="dropdown-item">15</option>
                                <option className="dropdown-item">16</option>
                                <option className="dropdown-item">17</option>
                                <option className="dropdown-item">18</option>
                                <option className="dropdown-item">19</option>
                                <option className="dropdown-item">20</option>
                                <option className="dropdown-item">21</option>
                                <option className="dropdown-item">22</option>
                                <option className="dropdown-item">23</option>
                                <option className="dropdown-item">24</option>
                                <option className="dropdown-item">25</option>
                                <option className="dropdown-item">26</option>
                                <option className="dropdown-item">27</option>
                                <option className="dropdown-item">28</option>
                                <option className="dropdown-item">29</option>
                                <option className="dropdown-item">30</option>
                                <option className="dropdown-item">31</option>
                            </select>


                        </div>
                        <div className="col">
                            <select id="month" className="btn dropdown-toggle" style={{ opacity: "70%", borderColor: "#ccc", width: "100%" }} >
                                <option value="" hidden>Month</option>
                                <option value="01" className="dropdown-item">Januray</option>
                                <option value="02" className="dropdown-item">February</option>
                                <option value="03" className="dropdown-item">March</option>
                                <option value="04" className="dropdown-item">April</option>
                                <option value="05" className="dropdown-item">May</option>
                                <option value="06" className="dropdown-item">June</option>
                                <option value="07" className="dropdown-item">July</option>
                                <option value="08" className="dropdown-item">August</option>
                                <option value="09" className="dropdown-item">September</option>
                                <option value="10" className="dropdown-item">October</option>
                                <option value="11" className="dropdown-item">November</option>
                                <option value="12" className="dropdown-item">December</option>
                            </select>

                        </div>
                        <div className="col">
                            <select id="year" className="btn dropdown-toggle" style={{ opacity: "70%", borderColor: "#ccc", width: "100%" }} >
                                <option value="" hidden>Year</option>
                                <option className="dropdown-item">1970</option>
                                <option className="dropdown-item">1971</option>
                                <option className="dropdown-item">1972</option>
                                <option className="dropdown-item">1973</option>
                                <option className="dropdown-item">1974</option>
                                <option className="dropdown-item">1975</option>
                                <option className="dropdown-item">1976</option>
                                <option className="dropdown-item">1977</option>
                                <option className="dropdown-item">1978</option>
                                <option className="dropdown-item">1979</option>
                                <option className="dropdown-item">1980</option>
                                <option className="dropdown-item">1981</option>
                                <option className="dropdown-item">1982</option>
                                <option className="dropdown-item">1983</option>
                                <option className="dropdown-item">1984</option>
                                <option className="dropdown-item">1985</option>
                                <option className="dropdown-item">1986</option>
                                <option className="dropdown-item">1987</option>
                                <option className="dropdown-item">1988</option>
                                <option className="dropdown-item">1989</option>
                                <option className="dropdown-item">1990</option>
                                <option className="dropdown-item">1991</option>
                                <option className="dropdown-item">1992</option>
                                <option className="dropdown-item">1993</option>
                                <option className="dropdown-item">1994</option>
                                <option className="dropdown-item">1995</option>
                                <option className="dropdown-item">1996</option>
                                <option className="dropdown-item">1997</option>
                                <option className="dropdown-item">1998</option>
                                <option className="dropdown-item">1999</option>
                                <option className="dropdown-item">2000</option>
                                <option className="dropdown-item">2001</option>
                                <option className="dropdown-item">2002</option>
                                <option className="dropdown-item">2003</option>
                                <option className="dropdown-item">2004</option>
                                <option className="dropdown-item">2005</option>
                                <option className="dropdown-item">2006</option>
                                <option className="dropdown-item">2007</option>
                                <option className="dropdown-item">2008</option>
                                <option className="dropdown-item">2009</option>
                                <option className="dropdown-item">2010</option>
                                <option className="dropdown-item">2011</option>
                                <option className="dropdown-item">2012</option>
                                <option className="dropdown-item">2013</option>
                                <option className="dropdown-item">2014</option>
                                <option className="dropdown-item">2015</option>
                                <option className="dropdown-item">2016</option>
                                <option className="dropdown-item">2017</option>
                                <option className="dropdown-item">2018</option>
                                <option className="dropdown-item">2019</option>
                                <option className="dropdown-item">2020</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ fontSize: "14px" }} >
                        Gender
                    </div>
                </div>
                <div className="form-group">
                    <select id="gender" className="btn dropdown-toggle" style={{ opacity: "70%", borderColor: "#ccc", width: "50%" }} >
                        <option value="" hidden>Gender</option>
                        <option className="dropdown-item">Male</option>
                        <option className="dropdown-item">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="font-weight-bold" style={{ fontSize: "14px" }} >
                        Address
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="address" placeholder="Building, road and more" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col" >
                            <div style={{ fontSize: "14px", paddingBottom: 15 }} >
                                Province
                            </div>
                            <input type="text" className="form-control" id="province" placeholder="Province" />
                        </div>
                        <div className="col">
                            <div style={{ fontSize: "14px", paddingBottom: 15 }} >
                                District
                            </div>
                            <input type="text" className="form-control" id="district" placeholder="District" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col">
                            <div style={{ fontSize: "14px", paddingBottom: 15, paddingTop: 15 }} >
                                Zipcode
                            </div>
                            <input type="number" className="form-control" id="zipcode" placeholder="Zipcode" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-1">
                            <input type="checkbox" id="notify" name="notify" value="1" style={{ width: "15px", height: "15px", marginRight: "10px", cursor: "pointer" }} />
                        </div>
                        <div className="col">
                            <label htmlFor="notify" style={{ fontSize: 14, cursor: "pointer" }}>
                                I want to be notified about the news. Privileges and promotion from PALMSKY
                            </label>
                        </div>
                    </div>
                    <hr />
                </div>
            </form>

        </div>


    )
}

export default profile