<template>
  <img class="member-image" :src="imageSrc"/>
</template>

<script>
export default {
  props: {
    iconUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc: function() {
      return "http://mappy.dali.dartmouth.edu/" + this.iconUrl;
    },
  },
}
</script>

<style>
.member-image {
  width: 200px;
  height: 200px;
  margin: auto;
  display: block;
}
</style>
