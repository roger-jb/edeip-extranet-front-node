import { connect } from 'react-redux'
import Home from '../components/Home'
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)