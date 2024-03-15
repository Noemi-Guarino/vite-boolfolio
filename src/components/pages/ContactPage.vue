<script>

export default {
    data() {
        return {
          message:'Pagina contatti'
        };
    },

}
</script>

<template>
  <h1>
    {{ message }}
  </h1>

  <div>
    <form action="">
      <div>
        <label for="name">
          Nome <span>*</span>
          <input type="text" id="name" name="name" placeholder="Inserisci il tuo nome">
        </label>
      </div>

      <div>
        <label for="email">
          Email <span>*</span>
          <input type="text" id="email" name="email" placeholder="Inserisci la tua email">
        </label>
      </div>

      <div>
        <label for="message">
          Message <span>*</span>
          <input type="text" id="message" name="message" placeholder="Inserisci il tuo message">
        </label>
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