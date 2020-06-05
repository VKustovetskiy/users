import { fetchUserList, fetchUser, createUser, updateUser, deleteUser } from '@/services/api/users'

const initialState = () => ({
  userList: [],
  selectedUser: {},
  pagination: {
    page: 1,
    total_pages: 0,
    per_page: 10,
    total: 10
  }
})

const users = {
  namespaced: true,
  state: initialState(),
  mutations: {
    SET_USER_LIST (state, payload) {
      state.userList = payload
    },

    SET_USER (state, payload) {
      state.selectedUser = payload
    },

    APPEND_USER_TO_LIST (state, user) {
      state.userList.push(user)
    },

    UPDATE_USER_AT_LIST (state, user) {
      const index = state.userList.findIndex(item => item.id === user.id)

      if (index !== -1) {
        state.userList.splice(index, 1, user)
      }
    },

    REMOVE_USER_FROM_LIST (state, userId) {
      state.userList.splice(state.userList.findIndex(user => user.id === userId), 1)
    },

    SET_PAGINATION (state, payload) {
      state.pagination = { ...state.pagination, ...payload }
    },
  },
  actions: {
    async fetchUserList ({ commit, state }) {
      const queryData = {
        delay: 3,
        page: state.pagination.page
      }
      /* eslint-disable-next-line */
      const { data, ad, ...pagination } = await fetchUserList(queryData)

      commit('SET_USER_LIST', data)
      commit('SET_PAGINATION', pagination)
    },

    async fetchUser ({ commit }, userId) {
      const { data } = await fetchUser({ userId, delay: 3 })

      commit('SET_USER', data)
    },

    async createUser ({ commit }, payload) {
      const data = await createUser(payload)

      commit('APPEND_USER_TO_LIST', data)
    },

    async updateUser ({ commit }, payload) {
      const data = await updateUser(payload)

      commit('UPDATE_USER_AT_LIST', data)
    },

    async deleteUser ({ commit }, userId) {
      await deleteUser(userId)
      commit('REMOVE_USER_FROM_LIST', userId)
    },

    setPagination ({ commit, dispatch }, payload) {
      commit('SET_PAGINATION', payload)
      dispatch('fetchUserList')
    } 
  },
  getters: {
    getUserList: state => state.userList,
    getSelectedUser: state => state.selectedUser,
    getPagination: state => state.pagination
  }
}

export default users
