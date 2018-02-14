import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    mappedAppState: state.appState
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)