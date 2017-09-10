<template>
  <p v-if='hasProjects' class="member-projects">Projects: {{projectsList}}</p>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredProjects: function() {
      return this.projects.filter(function(proj) {
        // some of the projects are blank strings, don't know why, but
        // this will prevent those from being rendered
        return proj.length > 0
      })
    },
    hasProjects: function() {
      return this.filteredProjects.length > 0
    },
    projectsList: function() {
      return filteredProjects.join(', ')
    }
  }
}
</script>

<style>
.member-projects { text-align: center; }
</style>
