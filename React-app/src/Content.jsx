import PropTypes from "prop-types";

const Content = ({ header, children }) => {
  return (
    <section>
      {header && <h2 className="contentHeader">{header} </h2>}

      <div className="contentChild">{children}</div>
    </section>
  );
};

Content.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  children: PropTypes.node, // `node` covers anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types.
};

Content.defaultProps = {
  header: "",
  desc: "",
};

export default Content;
