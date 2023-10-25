import PropTypes from "prop-types";
import { getData } from "../api/config";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export const ButtonCsv = ({ path, title }) => {
  const { setLoading } = useContext(MainContext);

  return (
    <button
      className="middle none center mr-3 rounded-lg bg-sky-500/75 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-600/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-40"
      data-ripple-light="true"
      onClick={() => {
        setLoading(true);
        getData(path, setLoading);
      }}
    >
      {title}
    </button>
  );
};

ButtonCsv.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
