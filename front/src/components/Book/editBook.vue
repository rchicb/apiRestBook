<template>
    <div class="container">
    <div class="row">
        <div class="col text-left">
            <h2>Editar Libro</h2>
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
                                <input type="text" placeholder="Title" name="title" id="title" class="form-control" v-model="titleForm"> 
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="descripcion" class="col-sm-2 col-form-label">Descripcion</label>
                            <div class="col-sm-6">
                                <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Descripcion" class="form-control" v-model="descriptionForm"></textarea>
                            </div>
                        </div>
                        <div class="rows">
                            <div class="col text-left">
                                <b-button type="submit" variant="primary" >Editar</b-button>
                                <b-button type="submit" class="btn-large-space"  :to="{ name:'ListBook' }">Cancelar</b-button>
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
import axios from 'axios';
import swal from 'sweetalert'

export default {
    data(){
        return{
            bookId: this.$route.params.bookId,
            titleForm:'',
            descriptionForm:'',
            form:{
                title:'',
                description:''
            }
        }

    },
    methods:{
        onSubmit(evt){
            evt.preventDefault();
            console.log("entro")    
            const path=`http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
            console.log(path);

            this.form.title=this.titleForm;
            this.form.description=this.descriptionForm;

            axios.put(path,this.form).then((response)=>{
                console.log(response.data);
                this.titleForm=response.data.title;
                this.descriptionForm=response.data.description;
               // alert("Cambio exitoso");
                swal("Libro actualizado exitosamente!","","success");
            }).catch((error)=>{
                console.log(error);
            })

        },
        getBookId(){
            const path=`http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
            console.log(path);

            axios.get(path).then((response)=>{
                console.log(response.data);
                this.titleForm=response.data.title;
                this.descriptionForm=response.data.description;
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    created(){
        this.getBookId();
    }
}
</script>
<style>

</style>