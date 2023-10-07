<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary mx-2">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>

  </div>

  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea 
        placeholder="Whats happened today?"
    ></textarea>
  </div>

  <FabButton 
    icon="fa-save"
  />

  <img src="https://agropos.com.br/wp-content/uploads/2020/05/Arboriza%C3%A7%C3%A3o1.jpg" 
  alt="entry-picture"
  class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components: {
        FabButton: defineAsyncComponent(() => import('../components/FabButton.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10 px rgba($color: #000000, $alpha: 0.2);
}

</style>