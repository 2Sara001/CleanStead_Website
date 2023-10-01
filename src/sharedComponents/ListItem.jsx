import { Link } from 'react-router-dom';

function ListItem({ classNameLi, classNameLink, text }) {
  return (
    <li className={classNameLi}>
      <Link to="/" className={classNameLink}>
        {text}
      </Link>
    </li>
  );
}

export default ListItem;
