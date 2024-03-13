<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    data() {
        return {
          message:'main'
        };
    },
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    },
    methods: {

    }
}
</script>

<template>
  <HeaderComponent/>
  <MainComponent/>
  <FooterComponent/>


</template>

<style scoped>

</style>