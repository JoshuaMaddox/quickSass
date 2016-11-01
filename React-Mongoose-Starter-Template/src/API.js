import { get } from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  functionName(varName){
    get(`urlName`)
      .then(res => {
        let { data } = res
        ServerActions.receiveSomeResult(data)
      })
      .catch(console.error)
  }
}

export default API