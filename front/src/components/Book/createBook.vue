<template>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Crear Libro</h3>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                              <form @submit="onSubmit">
                                  <div class="form-group row">
                                    <label for="title" class="col-sm-2 col-form-label">Titulo</label>
                                    <div class="col-sm-6">
                                        <input type="text" name="title" id="title" class="form-control" placeholder="Titulo" v-model="form.title">
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                      <label for="description" class="col-sm-2 col-form-label">Descripcion</label>
                                    <div class="col-sm-6">
                                        <textarea name="description" id="description" cols="30" rows="10" class="form-control" placeholder="Descripcion" v-model="form.description"></textarea>
                                    </div>
                                  </div>
                                  <div class="form-group row">
                                      <div class="col text-left">
                                      <b-button type="submit" variant="primary">Create</b-button>
                                      <b-button type="submit" :to="{name:'ListBook'}">Canelar</b-button>
                                      </div>
                                  </div>



                              </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {

    data(){
        return{
            form:{
                title:'',
                description:''
            }
        }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault();

            const path="http://127.0.0.1:8000/api/v1.0/books/";
            axios.post(path,this.form).then((response)=>{
                swal("Libro creado con exito","","success");
            }).catch((error)=>{
                swal("Error al crear el libro","","error");
            })
        }
    }
    
}
</script>