const success = () => {


    return (
        <div>
            <div className="row justify-content-center" >
                <form className="" style={{ width: "400px" }}>
                    <div className="form-group  row justify-content-center">
                        <img src="/images/unsuccessful.png" alt="" style={{ width: "70%" }} />
                    </div>
                    <div className="form-group row justify-content-center" >
                        <label className="font-weight-bold" style={{ fontSize: 38 }}>Failed</label>
                    </div>
                    <div className="form-group row justify-content-center" >
                        <label className="font" style={{ paddingTop: "-20px", marginTop: "-20px" }}>Cannot create an account, please try again</label>
                    </div>
                </form>
            </div>
            <style jsx>
                {`      
           
           `}
            </style>
        </div>


    )
}



export default success
