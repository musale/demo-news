import React from 'react';
import PropTypes from 'prop-types';

const LHSMenu = (props) =>{
  console.log(props);
  const itemsList = props.sources.map((item) => {
    return(
      <li key={item.name.toString()} className="nav-item">
        <a className="nav-link active" href="/source">{item.name}</a>
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
  sources: PropTypes.array
}
export default LHSMenu;
