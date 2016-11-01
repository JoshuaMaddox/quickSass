import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSomeResult(varName){
    AppDispatcher.dispatch({
      type: 'TYPE_NAME',
      payload: { varName }
    }) 
  }
}

export default ServerActions