import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Nav";
import Tags from "./tags";
import Promote from "./promoteTag";

const library = () => {
  const [book, setbook] = useState([]);
  const [typeOfBook, setType] = useState([]);
  const [categoryString, setString] = useState("CATEGORY");
  const [search, setSearch] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://shielded-caverns-34585.herokuapp.com/api/tag/"
      );
      const data = await response.json();
      setbook(data);
      setType(data);
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (router.asPath !== router.route) {
      const fetchdata = async () => {
        const response = await fetch(
          `https://shielded-caverns-34585.herokuapp.com/api/book/?q=${router.query.search}`
        );
        const data = await response.json();
        setSearch(data);
      };
      fetchdata();
      $(searchTag).show();
      $(Tag).hide();
    } else {
      $(Tag).show();
    }
  }, [router]);

  //function for filter book's category
  const selectCategory = (parameter) => {
    $(Tag).show();
    $(searchTag).hide();
    if (parameter === "all") {
      setType(book);
      setString("CATEGORY");
    } else {
      setType([
        {
          word: parameter,
        },
      ]);
      setString(parameter.toUpperCase());
    }
  };

  return (
    <div>
      <Navbar />

      {/* Notice */}
      {/* After Back-End is finish, this jsx will use map function */}
      <div className="container mt-4 mb-5">
        <Promote />
      </div>

      {/* Category Drop */}
      {/* After Back-End is finish, this jsx will use map function */}
      <div className="container d-flex flex-row mb-4">
        <p className="h4 mt-2 mr-2 font-weight-bold">LIBRARY </p>
        <div className="dropdown">
          <button
            className="btn cat-btn dropdown-toggle"
            type="button"
            id="dropD"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {categoryString}
          </button>
          <div
            className="dropdown-menu"
            aria-labelledby="dropD"
            style={{ backgroundColor: "#CD2424" }}
          >
            <a
              className="dropdown-item text-white hover-select"
              onClick={() => selectCategory("all")}
            >
              All
            </a>
            {book.map((option, keys) => (
              <a
                className="dropdown-item text-white hover-select"
                key={keys}
                onClick={() => selectCategory(option.word)}
              >
                {option.word}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Search */}
        <div id="searchTag" style={{ display: "none" }}>
          <div className="d-flex flex-row">
            <p className="pr-2 h5 ">Search</p>
            <hr style={{ width: "100%", borderTop: "1px solid black" }} />
          </div>
          <div className="d-flex flex-wrap">
            {search.map((item, key) => (
              <div
                className="mt-3 mr-3"
                key={key}
                style={{ cursor: "pointer" }}
              >
                <div className="card shadow-sm" style={{ width: "18rem" }}>
                  <div className="bg-image">
                    <img
                      className="card-image-top img-fluid zoom "
                      style={{ height: "27rem" }}
                      src={item.cover_Image}
                      alt="Card"
                    />
                  </div>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{ textOverflow: "ellipsis" }}
                    >
                      {" "}
                      {item.title}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Category */}
        <div id="Tag" style={{ display: "none" }}>
          {typeOfBook.map((booktags, index) => (
            <Tags datas={booktags.word} key={index} />
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="bg-dark mt-5 p-2" style={{ height: "40px" }}>
        <p className="text-light font-weight-lighter text-center mb-0">
          @2020-20221 PALMSKY THAILAND
        </p>
      </div>
    </div>
  );
};

export default library;
