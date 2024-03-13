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
      this.getPosts(this.currentPage)
    },
    methods: {
      getPosts(page){
        axios.get('http://127.0.0.1:8000/api/posts',{
              params:{
                page: page
              }
            })
          .then(res=>{
              console.log(res.data); 

              this.posts = res.data.results.data;
              this.currentPage = res.data.results.current_page;
              this.lastPage = res.data.results.last_page;

          });
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.getPosts(this.currentPage - 1)
        }
      },
      nextPage() {
        if (this.currentPage < this.lastPage) {
          this.getPosts(this.currentPage + 1)
        }
      }

    }
}
</script>

<template>

    <!-- <h3>
      Pagina attuale {{ currentPage }}|Ultima pagina  {{ lastPage }}
    </h3> -->

    <div class="container">
      <div v-for="post in posts" :key="post.id" class="card">
        <div v-if="post.cover_img !=null">
          <img :src="'http://127.0.0.1:8000/storage/' + post.cover_img" :alt="post.title">
        </div>
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


</template>

<style scoped>
.card{
  border: 1px solid black; 
}
</style>