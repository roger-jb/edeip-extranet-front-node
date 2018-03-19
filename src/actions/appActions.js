// const fetch = require('util').promisify(fetch);

const dao = {
  postConnexion : async (connectInfo) => {
    return fetch('',
      {
        method: 'POST',
        body: connectInfo
      })
  }
}

export const connexion = (connectInfo) => {
  return async (dispatch) => {
    dispatch(connexionRequest(connectInfo))
    try {
      const postConnexionResponse = (await dao.postConnexion(connectInfo).json())
      dispatch(connexionSuccess(postConnexionResponse))

    } catch (err){
      dispatch(connexionFailed(err))
    }

  }
}

export const connexionRequest = (connectInfo) => {
  return {
    type: 'APP_CONNEXION_REQUEST',
    connectInfo
  }
}

export const connexionSuccess = (connexionInfo) => {
  return {
    type: 'APP_CONNEXION_SUCCESS',
    connexionInfo
  }
}

export const connexionFailed = (error) => {
  return {
    type: 'APP_CONNEXION_FAILED',
    err: error
  }
}