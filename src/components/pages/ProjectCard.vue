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
      <div class="contentpage">
        <div v-for="post in posts" :key="post.id" class="card">
          <div class="topcard">
            <div v-if="post.cover_img !=null">
              <img :src="'http://127.0.0.1:8000/storage/' + post.cover_img" :alt="post.title">
            </div>
            <h2>
              {{ post.title }}
            </h2>
          </div>
          <div class="bodycard">
            <ul>
              <li >
                Tipologie: {{ post.type.title }}
              </li>
              <li v-for="technology in post.technologies" :key="technology.id">
                Tecnologie: {{ technology.title }}
              </li>
            </ul>
          </div>
          <div>
            <button class="specialbutton">
              <router-link :to="{ name: 'posts.show', params: { slug: post.slug } }" class="btn btn-primary">
                 Vedi post completo 
              </router-link>
            </button>
          </div>
        </div>
      </div>

      <div class="sectionpage">
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
.contentpage{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card{
  background-color: #008bba55;
  color: white;
  height: 300px; 
  width: calc(100% / 3 - 20px);
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
}

.topcard{
  border-bottom: 1px solid white;
  padding: 5px;
}

.bodycard{
  padding: 5px;
  margin-top: 3px;
}

.sectionpage{
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 7px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}


button:hover {
  background-color: white;
  color: #008CBA;
  border:2px solid #008CBA;
}


.specialbutton> a{
  color: white;
}

.specialbutton> a:hover{
  color: #008CBA;
}

</style>