import Vuex from 'vuex'

import permission from './modules/permission'
import configSys from './modules/config_sys'

export default Vuex.createStore({
  modules: {
    configSys,
    permission
  }
})