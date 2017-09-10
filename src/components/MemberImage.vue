<template>
  <div class="member-image">
    <img class="member-photo" :src="imageSrc"/>
    <yandex-map class="member-map"
      style="width: 100%; height: 100%"
      :coords="coords"
      :behaviors="[]"
      :controls="['zoomControl']"
      map-type="map"
      zoom="3">
      <ymap-marker
        marker-type="placemark"
        :coords="coords" >
      </ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
export default {
  props: {
    iconUrl: {
      type: String,
      required: true,
    },
    coords: {
      type: Array,
      required: true,
    }
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
.member-photo {
  width: 100%;
  height: 100%;
}
.member-map {
  display: none;
}

.member-image:hover .member-photo {
  display: none;
}
.member-image:hover .member-map {
  display: block;
}
</style>
