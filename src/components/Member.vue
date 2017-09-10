<template>
  <div class="member-card">
    <member-image :coords='member.lat_long' :iconUrl='member.iconUrl'/>
    <h1 class="member-name"><a :href='member.url'>{{member.name}}</a></h1>
    <p class="member-message">{{member.message}}</p>
    <member-terms :terms='member.terms_on'/>
    <member-projects :projects='member.project'/>
  </div>
</template>

<script>
import MemberImage from './MemberImage'
import MemberTerms from './MemberTerms'
import MemberProjects from './MemberProjects'

export default {
  name: 'member',
  components: {
    MemberImage,
    MemberTerms,
    MemberProjects,
  },
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.member-card {
  border: gray solid 1px;
  display: inline-block;
  width: 20%;
  min-width: 200px;
  height: 500px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

.member-name { text-align: center; }
.member-message { text-align: center; }
</style>
