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
      members: [
        {
          "name": "Tim",
          "iconUrl": "images/tim_round.jpg",
          "url": "//www.zingweb.com",
          "message": "Hiking in the High Sierras!",
          "lat_long": [
            37.2320967, -118.8578716
          ],
          "terms_on": [
            "17W"
          ],
          "project": [
            "Staff"
          ]
        }
      ],
    };
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
