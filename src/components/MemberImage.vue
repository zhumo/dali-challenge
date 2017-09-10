<template>
  <img :src="imageSrc"/>
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
