<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TPEVAUATIVO-IARA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
  
           <router-link class="nav-link active" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          
           <router-link class="nav-link" to="/about">About</router-link> 
        </li>
       <li class="nav-item">
           <router-link class="nav-link"  to="/Autenticacion">Autenticacion</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link"  to="/Catalogo">Catalogo</router-link>
        </li>
         <li v-if="user?.email != null" class="nav-item">
            <router-link class="nav-link"  to="/CatalogoA">Carga de productos</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

 <div class="container mt-3">
     <router-view/>
  </div>

</template>
<script>
import{auth} from '@/utils/firebase.js'
import{onAuthStateChanged}from 'firebase/auth'
export default {
  data(){
    return{
      user:null
    }
  },
  methods: {
    usuario_logueado()
      {
        onAuthStateChanged(auth,(user)=>{
          this.user = user
        })
      }
    },
  mounted(){
    this.usuario_logueado()
  }
}
  
</script> 


