<template>
<div class="row">
    <div v-for="p of lista_catalogo" v-bind:key="p.id" class="col-3">
      <div class="card" style="width: 18rem;">
        <img :src="p.url" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{p.descripcion}}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${{p.precio}}</li>
          <li class="list-group-item">{{p.porcentajeDescuento}}%</li>
        </ul>
        <div class="card-body">
          <a href="#" class="btn btn-success">Comprar</a>
        </div>
      </div>
    </div>
</div>

</template>
<script>
import { db} from '../utils/firebase.js'
import {collection,onSnapshot} from 'firebase/firestore'
export default {
    name:'Catalogo',
    data(){
      return{
        lista_catalogo:[]
      }
    },

    methods:{
      obtener_catalogo()
      {
        onSnapshot( collection(db,'catalogo'), (snapshot) => {
          this.lista_catalogo = []
            snapshot.docs.map( (doc) =>{
                this.lista_catalogo.push({ ...doc.data(), id: doc.id })
            })
        });
      }
    },

    mounted()
    {
      this.obtener_catalogo()
    }
  };
</script>