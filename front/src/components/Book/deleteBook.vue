<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Esta seguro de eliminar el libro?</h3>
                <p>Titulo: {{this.element.title}}</p>
                <p>Descripcion: {{this.element.description}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteBook" variant="danger">Eliminar</b-button>
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
            bookId:this.$route.params.bookId,
            element:{
                title:'',
                description:''
            }
        }
    },
    methods:{
        getBook(){
            const path=`http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
            console.log(path);

            axios.get(path).then((response)=>{
                console.log(response.data);
                this.element.title=response.data.title;
                this.element.description=response.data.description;
            }).catch((error)=>{
                console.log(error);
            })
        },
        deleteBook(){

               const path=`http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/`
            console.log(path);

            axios.delete(path).then((response)=>{
                location.href='/books'

            }).catch((error)=>{ 
                swal("No es posible eliminar el libro","","error")
            })

        }
    },
    created(){
        this.getBook();
    }

}
</script>