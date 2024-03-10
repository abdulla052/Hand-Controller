import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} HandMotion Controller. All rights reserved.
      </p>
      <p>Created by {props.creator}</p>
    </footer>
  );
};

Footer.propTypes = {
  creator: PropTypes.string,
};

Footer.defaultProps = {
  creator: "Abdulla Hassan",
};

export default Footer;
