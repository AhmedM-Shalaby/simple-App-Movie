// import { useState } from "react";
import { useContext, useState } from "react";
import useGetData from "./API/useGetData";
import MyButton from "./MyButton";
import MyCard from "./MyCard";
import { DataShere } from "../ConText/dataShere";
import { baseUrl } from "./API/httpserver";

export default function HomeMovies() {
  const { search } = useContext(DataShere);
  const [query, setQuery] = useState("New");
  const urlMovies = `${baseUrl}/movies${
    query !== "New" ? `?category=${query}` : ""
  }`;
  const urlGanres = `${baseUrl}/ganres`;
  const [dataMoives] = useGetData(urlMovies);
  const [dataGanres] = useGetData(urlGanres);
  const FiterMovies = dataMoives.filter((item) =>
    search === ""
      ? item
      : item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-2 sideLeft">
          <MyButton
            icon={"bi bi-house"}
            name={"New"}
            setQuery={setQuery}
            query={query}
          />
          {dataGanres.map((item) => (
            <MyButton
              key={item}
              icon={"bi bi-fullscreen"}
              name={item}
              setQuery={setQuery}
              query={query}
            />
          ))}
        </div>
        <div className="col-lg-10">
          <div className="row sideRight">
            {FiterMovies[0] ? (
              FiterMovies.map((item) => {
                return <MyCard key={item.id} item={item} />;
              })
            ) : (
              <h2 className="text-danger">
                Not Found Data : {search ? search : query}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
