<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{count}}</h3>
    <p>
      <!-------------------Mutations模板的使用------------->
      <!--<button @click="add">+</button>
      <button @click="reduce">-</button>
      ->
      <!-------------------Actions模板的使用---------------->
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>
<style>
  .count button:first-child,
  .count button:nth-child(2){
    color:red;
  }
</style>
<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'

  export default {
    name: "count",
    data() {
      return {
        msg: 'Hello Vuex'
      }
    },
    computed: {
      ...mapMutations(['count']),
      ...mapGetters(['count'])
    },
    methods: {
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction', 'reduceAction'])
    }
  }
</script>

<style scoped>

</style>
