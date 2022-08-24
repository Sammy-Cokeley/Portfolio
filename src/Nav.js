import { Link } from "react-router-dom";

const Nav = (props) => {
  const items = props.items;

  return (
    <div className="nav">
      {items.map((item) => (
        <Link to={`/${item}`} key={item} className="nav-item">
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
