import PropTypes from "prop-types";

const ArrowIcon = ({ direction, color }) => {
  return direction === "left" ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.293 5.29291L15.7073 6.70712L10.4144 12L15.7073 17.2929L14.293 18.7071L7.58594 12L14.293 5.29291Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41399 18.7073L7.99977 17.2931L13.2927 12.0002L7.99977 6.70727L9.41399 5.29306L16.1211 12.0002L9.41399 18.7073Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  color: PropTypes.string.isRequired,
};
