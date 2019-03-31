// import request from '@/service'
import { States } from './interface'
import { Commit } from 'vuex'

interface GetTodayWeatherParam {
  city: string
}
export const state: States = {
  count: 0,
  test1: []
}

export const getters = {
  count: (state: States) => state.count,
//   message: (state: States) => state.test1
}

export const mutations = {
  INCREMENT (state: States, num: number) {
    state.count += num
  }
}

export const actions = {
  async getTodayWeather (context: { commit: Commit }, params: GetTodayWeatherParam) {
    // return request.get('/api/weatherApi', { params: params })
    return 0;
  }
}

// export default {
//   state,
//   getters,
//   mutations,
//   actions
// }