import { useContext, useState } from "react";
import useGetData from "../components/API/useGetData";
import MyButton from "../components/MyButton";
import MyCard from "../components/MyCard";
import { DataShere } from "../ConText/dataShere";
import { baseUrl } from "../components/API/httpserver";

export default function HomeMovies() {
  const { search } = useContext(DataShere);
  const [query, setQuery] = useState("New");
  const urlMovies = `${baseUrl}/movies`;
  const urlGanres = `${baseUrl}/ganres`;
  const [data] = useGetData(urlMovies);
  const [dataGanres] = useGetData(urlGanres);
  const dataMoives = data.filter((moive) =>
    query !== "New" ? moive.category === query : moive
  );

  const FiterMovies = dataMoives.filter((item) =>
    search === ""
      ? item
      : item.name.toLowerCase().includes(search.toLowerCase()) || query == "New"
      ? item
      : `?category=${query}`
  );
  return (
    <main className="container-fluid ">
      <div className="row justify-content-end ">
        <div className="col-lg-3 sideLeft">
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
        <div className="col-lg-9 sideRight">
          <div className="row">
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
    </main>
  );
}
