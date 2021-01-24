<template>
  <div class="font-mono">
    <Navbar/>
    <div class="h-96 w-full" id="map"></div>
    <Cards/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Cards from './components/Cards.vue';
import Navbar from './components/Navbar.vue';
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Cards,
    Footer
  },
  setup() {
    // mounted
    onMounted(() => {
      function configureMaps() {
        console.log('configuring maps!');
        const center: google.maps.LatLngLiteral = {lat: 52.635291599999995, lng: 10.057759400000021};
        const centerTwo: google.maps.LatLngLiteral = {lat: 52.63962005011247, lng: 10.05972212611468};
        const mapId = 'debfad8bd0280011';
        const customIcon = {
              path: 'm -0.01694917,-32.135593 c -5.52200003,0 -9.99999983,4.478 -9.99999983,10 0,9.999999 9.99999983,22.00000017 9.99999983,22.00000017 0,0 9.99999997,-12.00000117 9.99999997,-22.00000017 0,-5.522 -4.4780002,-10 -9.99999997,-10 z m 0,15.999999 c -3.31400003,0 -6.00000003,-2.686 -6.00000003,-5.999999 0,-3.314 2.686,-6 6.00000003,-6 3.31399997,0 5.99999977,2.686 5.99999977,6 0,3.313999 -2.6859998,5.999999 -5.99999977,5.999999 z',
              scale: 1,
              fillColor: 'green',
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: '#000000',
              strokeOpacity: 0.5
        }

       let mapDiv = document.querySelector('#map');
        const map = new window.google.maps.Map(mapDiv as HTMLElement, {
          center,
          zoom: 15,
          mapId,
          disableDefaultUI: true,
        });

        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: center,
          map: map,
          icon: customIcon,
          title: 'Hof Niebuhr',
        });

        // The marker, positioned at Uluru
        const markerTwo = new google.maps.Marker({
          position: centerTwo,
          map: map,
          icon: customIcon,
          title: 'Klein Hehlen',
        });

      }
      window.checkAndAttachMapScript(configureMaps);
      return configureMaps;
    })
  },
})
</script>