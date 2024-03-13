<script>
import axios from 'axios';

export default {
    data() {
        return {
          posts: [],
          currentPage: 1,
          lastPage: 1,
        };
    },
    created(){
      axios.get('http://127.0.0.1:8000/api/posts')
      .then(res=>{
          console.log(res.data); 

          this.posts = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;

      })
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
            axios.get('http://127.0.0.1:8000/api/posts',{
              params:{
                page: this.currentPage - 1
              }
            })
          .then(res=>{
              console.log(res.data); 

              this.posts = res.data.results.data;
              this.currentPage = res.data.results.current_page;
              this.lastPage = res.data.results.last_page;

          });
        }
      },
      nextPage() {
        if (this.currentPage < this.lastPage) {
            axios.get('http://127.0.0.1:8000/api/posts',{
              params:{
                page: this.currentPage + 1
              }
            })
          .then(res=>{
              console.log(res.data); 

              this.posts = res.data.results.data;
              this.currentPage = res.data.results.current_page;
              this.lastPage = res.data.results.last_page;

          });
        }
      }

    }
}
</script>

<template>
  <main>
    <h1>
      Tutti i post
    </h1>

    <!-- <h3>
      Pagina attuale {{ currentPage }}|Ultima pagina  {{ lastPage }}
    </h3> -->

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

      <div>
        <button @click="prevPage()">
          Precedente
        </button>
        <button @click="nextPage()">
          Successivo
        </button>
      </div>

    </div>
  </main>


</template>

<style scoped>
.card{
  border: 1px solid black; 
}
</style>