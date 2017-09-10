<template>
  <div class="member">
    <img :src="imgUrl"/>
    <h1>{{member.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'member',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imgUrl: function() {
      return "http://mappy.dali.dartmouth.edu/" + this.member.iconUrl;
    },
  },
}
</script>
