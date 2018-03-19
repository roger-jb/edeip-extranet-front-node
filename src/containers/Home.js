import { connect } from 'react-redux'
import Home from '../components/Home'
import * as appActions from '../actions/appActions'
const mapStateToProps = (state) => {
  return {
    mappedHomeState: state.homeState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    mappedConnection: (connectInfo) => dispatch(appActions.connexion(connectInfo))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)