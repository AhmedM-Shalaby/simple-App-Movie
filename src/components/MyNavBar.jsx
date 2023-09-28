import { useContext, useState } from "react";
import { DataShere } from "../ConText/dataShere";
import { useNavigate } from "react-router-dom";

export function MyNavBar({ show }) {
  const { setSearch } = useContext(DataShere);
  const navigate = useNavigate();

  const GetDataSearch = (e) => {
    setSearch(e.target.value);
  };
  const handelChangeRoute = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <nav>
        <div className="row p-2">
          <div className="col-7 mt-2">
            <div className="logoMovies">
              <img
                src="https://i.ibb.co/s9Qys2j/logo.png"
                alt="logo"
                onClick={handelChangeRoute}
              />
            </div>
          </div>
          <div className="col-5 mt-2">
            {show && (
              <div className="search__Eng">
                <input
                  onChange={(e) => GetDataSearch(e)}
                  className="form-control me-2"
                  type="text"
                  placeholder="Search..."
                />
                <i className="bi bi-search searchBar"></i>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

// : https://api.tvmaze.com/search/shows?q=girls => search
