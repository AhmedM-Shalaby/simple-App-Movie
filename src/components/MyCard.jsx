import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MyCard(props) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
      <div className="card__movie">
        <img
          className="card__img"
          src={props.item.image.original || "https://placehold.co/600x400"}
          alt=""
        />
        <div className="card__body">
          <h4>
            <Link to={`SinglePage/${props.item.id}`}>{props.item.name}</Link>
          </h4>
          <span>{props.item.genres.map((genres) => `${genres} | `)}</span>
        </div>
      </div>
    </div>
  );
}
MyCard.propTypes = {
  item: PropTypes.object,
};
