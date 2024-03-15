<script>
import axios from 'axios';

export default {
    data() {
        return {
          name:'',
          email:'',
          message:'',
          accepted: false
        };
    },
    methods:{
    sendMessage(){
      // console.log('name',this.name,typeof this.name)
      if (this.name !=  null 
          &&
          this.name != ''
          &&
          this.name.length <= 64
          &&
          this.email != null
          && 
          this.email != ''
          &&
          this.email.length <= 255
          &&
          this.message != null
          &&
          this.message != ''
          &&
          this.message.length <= 2048
          &&
          this.accepted 
      ) {
        axios.post('http://127.0.0.1:8000/api/contacts', {
          name: this.name,
          email: this.email,
          message: this.message,
          accepted: this.accepted
        })
        .then(res => {
          console.log('risposta api',res.data);
        })
        .catch(error => {   // catch per vedere se la chiamata API è andata in errore
              console.log('errore axios', error)
        })
      }
      else{
        alert('Inserisci i dati corretti');
      }
    }
      },

}
</script>

<template>
  <h1>
    Contatti
  </h1>

  <div>
    <form  method="POST" @submit.prevent="sendMessage()">
      <div> 
        <!-- {{ name }} -->
        <label for="name">
          Nome <span>*</span>
          <input v-model="name" type="text" id="name" name="name" placeholder="Inserisci il tuo nome" maxlength="64" required>
        </label>
      </div>

      <div>
        <label for="email">
          Email <span>*</span>
          <input v-model="email" type="email" id="email" name="email" placeholder="Inserisci la tua email" maxlength="255" required>
        </label>
      </div>

      <div>
        <label for="message">
          Message <span>*</span>
          <textarea v-model="message" type="text" id="message" name="message" placeholder="Inserisci il tuo message" maxlength="2048" required></textarea>
        </label>
      </div>

      <div>
        <input type="checkbox" value="1" id="accept" name="accept">
        <label for="accept">Ho letto ed accetto i <a href="#">Termini di condizione</a> e la <a href="#">privacy police</a></label>
      </div>

      <div>
        <p>
          Tutti i campi con <span>*</span> sono obbligatori
        </p>
      </div>

      <div>
        <button type="submit">
          Invia
        </button>
      </div>
    </form>
  </div>


</template>

<style scoped>


</style>