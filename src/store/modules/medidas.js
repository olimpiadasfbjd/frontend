import axios from 'axios'

const state = {
  medidas : null
}
const mutations = {
  setMedidas(state,medidas){
    state.medidas = medidas  
  }
}

const actions = {
  obtainMedidas({ commit }) {
    axios({
      method: 'get',
      url: 'http://192.168.30.199:9090',
    })
    .then(res => {
      commit('setMedidas', res.data)
      console.log(res.data)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
