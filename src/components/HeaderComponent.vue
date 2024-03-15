<script>

export default {
    data() {
        return {
          links:[
            {
              routerName:'home',
              label:'home',
            },
            {
              routerName:'posts.index',
              label:'blog',
            },
            {
              routerName:'contact',
              label:'contact',
            },

          ]
        };
    },
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
          <li v-for="(link,index) in links" :key="index">
            <router-link :to="{ name: link.routerName }" class="classe_css">
              {{ link.label }}
            </router-link>
          </li>
          <!-- <li>
            <router-link :to="{ name: 'posts.index' }" class="classe_css">
              Posts
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }" class="classe_css">
              Contact
            </router-link>
          </li>
 -->
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