import PropTypes from 'prop-types'

export const children = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
])
