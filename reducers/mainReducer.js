import listAction from './../actions/listActions'

const INITIAL_STATE = {
  error: null,
  isConnected: false,
  userInfo: {}
};

const mainReducer = (currentState = INITIAL_STATE, action) =>{
  switch (action.type){
    case listAction.MAIN_CONNEXION_REQUEST:
      return {
        ...currentState,
        error: null,
        isConnected: false,
        userInfo: null
      }
    case listAction.MAIN_CONNEXION_SUCCESS:
      return {
        ...currentState,
        error: null,
        isConnected: !currentState.isConnected,
        // isConnected: true,
        userInfo: action.connexionInfo || {nom: 'ROGER', prenom: 'Jean-Baptiste'}
      }
    case listAction.MAIN_CONNEXION_FAILED:
      return {
        ...currentState,
        error: null,
        isConnected: false,
        userInfo: {}
      }
    default:
      return currentState;
  }
};

export default mainReducer