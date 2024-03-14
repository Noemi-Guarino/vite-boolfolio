<script>

export default {
    data() {
        return {
          // message:'header'
        };
    },
    // components: {
    //     AppHeader,
    //     AppMain,
    //     AppFooter
    // },
    methods: {

    }
}
</script>

<template>
  <header>
    <!-- {{message}} -->
    <div>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }" class="classe_css">
              Home page
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'posts.index' }" class="classe_css">
              Posts
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>


</template>

<style scoped>

nav{
  background-color: #008bba55;
  color: white;
  margin-bottom: 30px;
  li{
    display: inline-block;
    padding: 10px;

    a{
      text-decoration: none;
      color: white;
    }
  }
}
</style>