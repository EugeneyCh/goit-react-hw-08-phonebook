const { NavLink } = require('react-router-dom');

const styles = {
  link: { padding: 12, fontWeight: 700, color: '#2A363B' },

  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log In
      </NavLink>
    </div>
  );
}
