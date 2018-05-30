import React from 'react'
import PropTypes from 'prop-types'


// die Props werden in containers/FilterLink.js übergeben
// das JS Objekt als Argument ist mir noch ein Rätsel
const Link = ({ active, children, onClick }) => (
  <button
     onClick={onClick}
     disabled={active}
     style={{
         marginLeft: '4px',
     }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link