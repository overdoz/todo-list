import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// map state to props wird jedes Mal aufgerufen sobald sich im Store etwas verändert
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

// bei einer props Aktion wird diese Funktion aufgerufen und der Store geupdated
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))  // keine Ahnung welcher Filter aufgerufen wird
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// Die connect Funktion verbindet den container mit dem Component