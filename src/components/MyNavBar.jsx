import { useContext } from "react";
import { DataShere } from "../ConText/dataShere";

export function MyNavBar() {
  const {setSearch} = useContext(DataShere)
  
  const GetDataSearch =(e) =>{
    setSearch(e.target.value)
  }

  return (
    <div className="container-fluid">
      <nav>
        <div className="row p-2">
          <div className="col-7 mt-2">
            <div className="logoMovies">
              <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="logo" />
            </div>
          </div>
          <div className="col-5 mt-2">
          <div className="search__Eng">
        <input onChange={(e)=>GetDataSearch(e)} className="form-control me-2" type="text" placeholder="Search..." />
        <i className="bi bi-search searchBar"></i>
      </div>
          </div>
        </div>
      </nav>
    </div>
  );
}



// : https://api.tvmaze.com/search/shows?q=girls => search