<template>
  <div class="row">

    <div class="col-4">
        
      <div class="mb-3">
        <label class="form-label">descripcion</label>
        <input v-model="descripcion" class="form-control" type="text" placeholder="ingrese descripcion"/>
      </div>
       <div class="mb-3">
        <label class="form-label">porcentajeDescuento</label>
        <input v-model="porcentajeDescuento" class="form-control" type="text" placeholder="ingrese porcentaje"/>
      </div>
     
      <div class="mb-3">
        <label class="form-label">precio</label>
        <input
          v-model="precio"
          class="form-control"
          type="number"
          placeholder="ingrese precio"
        />
      </div>
          <div class="mb-3">
        <label class="form-label">categoria</label>
         <input
         v-model="categoria"
          class="form-control"
          type="text"
          placeholder="categoria"
        />
      </div>
        <div class="mb-3">
        <label class="form-label">stock</label>
         <input
         v-model="stock"
          class="form-control"
          type="number"
          placeholder="stock"
        />
      </div>
        <div class="mb-3">
        <label class="form-label">estado</label>
         <input
         v-model="estadoP"
          class="form-control"
          type="text"
          placeholder="estado"
        />
      </div>
       <div class="mb-3">
        <label class="form-file">adjuntar</label>
        <input @change="vista_catalogo()" id="inp_file" class="form-control" type="file">
      </div>
      <div class="mb-3">
        <img :src="preview" class="img-fluid">
      </div>
       <button v-if="estado == 0" @click="guardarCatalogo()" class="btn btn-info">
       Guardar taller
      </button>

      <button v-if="estado == 1" @click="actualizarCatalogo()" class="btn btn-primary">Actualizar</button>
    </div>
       <div class="col-8">
       <table class="table">
            <thead>
                <tr>
                    <th>imagen</th> 
                  <th>descripcion</th>
                  <th>precio</th>
                  <th>porcentajeDescuento</th>
                  <th>categoria</th>
                  <th>stock</th>
                  <th>estado</th>
                  <th>
                    Acción
                  </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="catalogo of lista_catalogo" v-bind:key="catalogo.id">
                    <td>
                        <img :src="catalogo.url" style="width:2rem" alt="">
                    </td>
                    <td>{{catalogo.descripcion}}</td>
                    <td>{{catalogo.precio}}</td>
                    <td>{{catalogo.porcentajeDescuento}}</td>
                    <td>{{catalogo.categoria}}</td>
                    <td>{{catalogo.stock}}</td>
                    <td>{{catalogo.estadoP}}</td>
                    <td>
                       <button @click="eliminarCatalogo(catalogo.id)" class="btn btn-danger btn-sm">x</button>
                       <button @click="editarCatalogo(catalogo)" class="btn btn-primary btn-sm ms-1">Edit</button>
                       </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>
<script>
import { db, storage} from '../utils/firebase.js'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { addDoc, collection, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'
export default {
  name: "CatalogoAdminForm",
  data() {
    return {
      descripcion:'',
      precio:'',
      porcentajeDescuento:'',
      lista_catalogo:[],
      stock:'',
      estadoP:1,
      categoria:'',
      estado:0,
      url:null,
      preview:null,
      id:null
    };
  },
   methods: {




      async guardarCatalogo()
      {
          await this.subir_imagen()

          const miObjeto = {
              descripcion: this.descripcion,
              precio: this.precio,
              porcentajeDescuento:this.porcentajeDescuento,
              categoria:this.categoria,
              stock:this.stock,
              estadoP:this.estadoP,
              url:this.url
          }
          const coleccion = collection(db,'catalogo')
          await addDoc(coleccion,miObjeto)

          this.descripcion = '';
          this.precio= '';
          this.porcentajeDescuento= '';
          this.categoria = '';
          this.stock ='';
          this.estadoP ='';
          
      },

      obtenerCatalogo()
      {
        onSnapshot( collection(db,'catalogo'), (snapshot) => {
          this.lista_catalogo = []
            snapshot.docs.map( (doc) =>{
                this.lista_catalogo.push({ ...doc.data(), id: doc.id })
            })
        });
      },

      async eliminarCatalogo(id)
      {
          await deleteDoc( doc(db,'catalogo',id) )
      },

      editarCatalogo(catalogo)
      {
          this.descripcion = catalogo.descripcion
          this.precio = catalogo.precio
          this.porcentajeDescuento = catalogo.porcentajeDescuento
          this.categoria = catalogo.categoria
          this.stock = catalogo.stock
          this.id =catalogo.id
          this.estadoP = catalogo.estadoP

          this.estado = 1;
      },

     async actualizarCatalogo()
      {
          const CatalogoActualizado = {
            descripcion:this.descripcion,
            precio:this.precio,
            porcentajeDescuento:this.porcentajeDescuento,
            categoria:this.categoria,
            stock:this.stock,
            estadoP:this.estadoP
          }

          updateDoc( doc(db, 'catalogo', this.id), CatalogoActualizado )

          this.descripcion = '';
          this.precio= '';
          this.porcentajeDescuento = '';
          this.categoria= '';
          this.stock='';
          this.estadoP='';
          this.estado = 0;
      },

     async subir_imagen()
     {
      const archivo = document.getElementById("inp_file").files[0]
      //aca decimos en donde y con que nombre se subira el archivo a storage 
      const config = ref(storage,'catalogo/'+archivo.name)
      await uploadBytes(config,archivo).then(() =>{
        alert('operacion exitosa!')
      })

      this.url = await getDownloadURL(config)
     },

      vista_previa()
    {
      this.preview = URL.createObjectURL(document.getElementById('inp_file').files[0])
    },
     
     },
   

  mounted()
  {
     this.obtenerCatalogo()
  }
};
</script>
   
