// const fetch = require('util').promisify(fetch);

const dao = {
  postConnexion : async (connexionInfo) => {
    return fetch('',
      {
        method: 'POST',
        body: connexionInfo
      })
  }
}

export const connexion = (connexionInfo) => {
  // return async (dispatch) => {
  //   dispatch(connexionRequest(connectInfo))
  //   try {
  //     const postConnexionResponse = (await dao.postConnexion(connectInfo).json())
  //     dispatch(connexionSuccess(postConnexionResponse))
  //
  //   } catch (err){
  //     dispatch(connexionFailed(err))
  //   }
  //
  // }
  return {
    type: 'HOME_CONNEXION_SUCCESS',
    connexionInfo
  }
}

export const connexionRequest = (connectInfo) => {
  return {
    type: 'HOME_CONNEXION_REQUEST',
    connectInfo
  }
}

export const connexionSuccess = (connexionInfo) => {
  return {
    type: 'HOME_CONNEXION_SUCCESS',
    connexionInfo
  }
}

export const connexionFailed = (error) => {
  return {
    type: 'HOME_CONNEXION_FAILED',
    err: error
  }
}