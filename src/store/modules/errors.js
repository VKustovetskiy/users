const initialState = {
  isError: false,
  messages: [],
  formErrors: {}
}

const errors = {
  namespaced: true,
  state: initialState,

  mutations: {
    PUSH_ERROR_MESSAGE (state, payload) {
      state.isError = true
      state.messages.push(payload)
    },

    SHIFT_ERROR (state) {
      state.isError = false
      state.messages.shift()
    }
  },

  actions: {
    pushError ({ commit }, error) {
      commit('PUSH_ERROR_MESSAGE', error)
    },

    removeError ({ commit }) {
      commit('SHIFT_ERROR')
    }
  },

  getters: {
    getLastErrorMessage: state => state.messages[state.messages.length - 1],
    getErrorState: state => state.isError
  }
}

export default errors
