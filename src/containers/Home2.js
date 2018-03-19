import { connect } from 'react-redux'
import Home2 from '../components/Home2'
import * as homeActions from '../actions/homeActions'
const mapStateToProps = (state) => {
  return {
    mappedHomeState: state.homeState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    mappedConnection: (connectInfo) => dispatch(homeActions.connexion(connectInfo))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home2)