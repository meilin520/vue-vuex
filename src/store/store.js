import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1
};

//同步执行
const mutations = {
  add(state,m) {
    state.count += m;
  },
  reduce(state, n) {
    state.count -= n;
  }
}

const getters = {
  count: function (state) {
    return state.count += 100;
  }
}
// 异步执行
const actions = {
  addAction(context,state) {
    context.commit('add', 10)
    state.count +=1;
  },
  reduceAction({commit}) { //参数解构
    commit('reduce', 10)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
