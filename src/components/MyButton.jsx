import PropTypes, { func } from "prop-types";
export default function MyButton({ name, icon, setQuery, query }) {
  const handelActive = () => {
    setQuery(name);
  };
  return (
    <button
      onClick={handelActive}
      className={`btn-ganres ${query === name ? "active" : ""}`}
    >
      <i className={icon}></i>
      <span>{name}</span>
    </button>
  );
}

MyButton.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  setQuery: func,
  query: PropTypes.string,
};
