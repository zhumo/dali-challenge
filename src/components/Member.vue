<template>
  <div class="member">
    <member-image :iconUrl='member.iconUrl'/>
    <img :src="imgUrl"/>
    <h1>{{member.name}}</h1>
  </div>
</template>

<script>
import MemberImage from './MemberImage'

export default {
  name: 'member',
  components: {
    'member-image': MemberImage
  },
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
}
</script>
