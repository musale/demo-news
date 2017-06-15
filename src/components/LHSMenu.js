import React from 'react';
import PropTypes from 'prop-types';

const LHSMenu = (props) =>{
  const itemsList = props.sources.map((item) => {
    const href = `/${item.id}`;
    return(
      <li key={item.id} className="nav-item">
        <a onClick={props.handleClick.bind(this, item)} className="nav-link active" href={href}>{item.name}</a>
      </li>
    )
  });
  return (
      <ul className="nav flex-column">
        {itemsList}
      </ul>
  )
}

LHSMenu.propTypes = {
  sources: PropTypes.array,
  handleClick: PropTypes.func
}
export default LHSMenu;
