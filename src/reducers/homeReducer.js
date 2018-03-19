const INITIAL_STATE = {
  error: null,
  isConnected: false,
  userInfo: {}
};

const appReducer = (currentState = INITIAL_STATE, action) =>{
  switch (action.type){
    case 'HOME_CONNEXION_REQUEST':
      return {
        ...currentState,
        error: null,
        isConnected: false,
        userInfo: null
      }
    case 'HOME_CONNEXION_SUCCESS':
      return {
        ...currentState,
        error: null,
        isConnected: !currentState.isConnected,
        // isConnected: true,
        userInfo: action.connexionInfo || {nom: 'ROGER', prenom: 'Jean-Baptiste'}
      }
    case 'HOME_CONNEXION_FAILED':
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

export default appReducer