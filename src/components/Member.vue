<template>
  <div class="member-card">
    <member-image :coords='member.lat_long' :iconUrl='member.iconUrl'/>
    <member-name :name='member.name' :path='member.url'/>
    <p class="member-message">{{member.message}}</p>
    <member-terms :terms='member.terms_on'/>
    <member-projects :projects='member.project'/>
  </div>
</template>

<script>
import MemberImage from './MemberImage'
import MemberName from './MemberName'
import MemberTerms from './MemberTerms'
import MemberProjects from './MemberProjects'

export default {
  name: 'member',
  components: {
    MemberImage,
    MemberName,
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
  display: inline-table;
  width: 20%;
  min-width: 200px;
  height: 500px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

.member-message { text-align: center; }
</style>
