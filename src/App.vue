<template>
  <div id="app">
    <member v-for='member in members' :member='member'></member>
  </div>
</template>

<script>
import Member from './components/Member'

export default {
  name: 'app',
  components: {
    Member,
  },
  data: function() {
    return {
      members: [],
    }
  },
  created: function() {
    this.$http.get(
      'http://mappy.dali.dartmouth.edu/members.json'
    ).then(
      response => {
        this.members = response.body
      }, 
      response => {
        alert("Something went wrong:" + response.status)
      },
    )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
