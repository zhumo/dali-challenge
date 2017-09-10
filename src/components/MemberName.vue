<template>
  <h1 class="member-name"><a :href='url'>{{name}}</a></h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    }
  },
  computed: {
    url: function() {
      // Some members' urls return a full url, other members' urls return
      // a path, which I've discovered should point to mappy.dali.dartmouth.edu.
      // Here, I differentiate two and give the appropriate final url.
      if(this.path.match(/^\/\//i)) {
        return this.path
      } else {
        return "http://mappy.dali.dartmouth.edu/" + this.path
      }
    },
  },
}
</script>

<style>
.member-name { text-align: center; }
</style>
