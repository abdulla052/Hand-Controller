import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Button = ({ children, icon, bgcolor, href, width }) => {
  return (
    <>
      <a href={href} style={{ textDecoration: "none" }}>
        <button className="button" style={width && { width: width }}>
          {bgcolor ? "" : ""} {/* Fix this line */}
          {icon ? (
            <img width={28} className="btnIcon" src={icon} alt="icon" />
          ) : (
            ""
          )}
          {children}
        </button>
      </a>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: "Button",
  href: "#",
};

export default Button;
