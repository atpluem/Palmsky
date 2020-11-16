import Header from '../Header'

export default function insertData () {

    return (
        <div id="Me" className="shadow-sm" style={{ backgroundColor: "white" }}>
            <link href="../owner/layout.css" rel="stylesheet" />
            <Header/>
            <div className="d-flex justify-content-center py-5">
                <img className="rounded-circle h-25" src="https://i.pinimg.com/236x/34/3a/f9/343af9a64d1875d2ff718a65767f74aa.jpg" />
                <div className="align-self-center px-4">
                    <p className="font-weight-bold h2">Thagoon Thongpee</p>
                    <p>PALMSKY BOOK HOUSE</p>
                    <div>
                        <a className="pr-3" href="#">Edit Profile</a>
                        <label> | </label>
                        <a className="pl-3" href="#">Sign Out</a>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
               <img className="mx-4 mb-3" src="/open-book.png" style={{ width: 35, height: 35}} /> 
               <img className="mx-4 mb-3" src="/list.png" style={{ width: 35, height: 35}} /> 
               <img className="mx-4 mb-3" src="/graphic.png" style={{ width: 30, height: 30}} /> 
            </div>
        </div>
    )
}

