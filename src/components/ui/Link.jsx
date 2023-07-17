import PropTypes from "prop-types";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Link = ({ isLink = false, isScroll = false, href, to, children }) => {
  if (isLink) {
    return <NextLink href={href}>{children}</NextLink>;
  }

  if (isScroll) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={300}
        spy={true}
        exact="true"
        offset={0}
      >
        {children}
      </ScrollLink>
    );
  }

  // Return null if neither isLink or isScroll is true
  return null;
};
Link.propTypes = {
  isLink: PropTypes.bool,
  isScroll: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
