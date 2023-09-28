import PropTypes, { func } from "prop-types";
export default function MyButton({ name, icon, setQuery, query }) {
  const handelActive = () => {
    setQuery(name);
  };
  return (
    <button
      onClick={handelActive}
      className={`btn-ganres ${query === name ? "active" : null}`}
    >
      <i className={icon}></i>
      {name}
    </button>
  );
}

MyButton.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  setQuery: func,
  query: PropTypes.string,
};
