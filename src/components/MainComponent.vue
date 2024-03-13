<script>
import axios from 'axios';

export default {
    data() {
        return {
          posts: []
        };
    },
    created(){
      axios.get('http://127.0.0.1:8000/api/posts')
      .then(res=>{
          console.log(res.data);

          this.posts = res.data.results.data;
      })
    },
    methods: {

    }
}
</script>

<template>
  <main>
    <h1>
      Tutti i post
    </h1>

    <div class="container">
      <div v-for="post in posts" :key="post.id" class="card">
        <div>
          <h2>
            {{ post.title }}
          </h2>
        </div>
        <div>
          <ul>
            <li >
              Tipologie: {{ post.type.title }}
            </li>
            <li v-for="technology in post.technologies" :key="technology.id">
              Tecnologie: {{ technology.title }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </main>


</template>

<style scoped>
.card{
  border: 1px solid black;
}
</style>