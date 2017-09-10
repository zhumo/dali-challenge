<template>
  <p class="member-terms">Terms: {{termsList}}</p>
</template>

<script>
export default {
  props: {
    terms: {
      type: Array,
      required: true,
    },
  },
  computed: {
    termsList: function() { return this.terms.join(", ") },
  },
}
</script>

<style>
.member-terms { text-align: center; }
</style>
