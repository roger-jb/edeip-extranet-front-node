const INITIAL_STATE = {
  error: null,
  isConnected: false,
  userInfo: null
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
        isConnected: true,
        userInfo: action.connexionInfo
      }
    case 'HOME_CONNEXION_FAILED':
      return {
        ...currentState,
        error: null,
        isConnected: false,
        userInfo: null
      }
    default:
      return currentState;
  }
};

export default appReducer