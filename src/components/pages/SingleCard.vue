<script>
import axios from 'axios';

export default {
    data() {
        return {
          post: null,
        };
    },
    created(){
      this.getPost()
    },
    methods: {
      getPost(){
        axios.get('http://127.0.0.1:8000/api/posts/' + this.$route.params.slug)
          .then(res=>{
              console.log(res.data); 
              if(res.data.success){
                this.post = res.data.results;
              }else {
                this.$router.push({ name: 'NotFound' })
              }
          });
      },
    }
}
</script>

<template>

    <!-- <h3>
      Pagina attuale {{ currentPage }}|Ultima pagina  {{ lastPage }}
    </h3> -->

    <div class="container">
      <div class="contentpage">
        <div v-if="post != null" class="card">
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
         </div>
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
  padding: 13px 23px;
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

</style>