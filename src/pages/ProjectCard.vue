<script>

import axios from 'axios';

export default {
    name: 'ProjectCard',
    data(){
        return{
            baseUrl:'http://localhost:8000',
            project:[],
        }
    },
    methods:{
        getProjectItem(){
            const slug = this.$route.params.slug;
            console.log(slug);
            
            axios.get(`${this.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                this.project= response.data.project;
            })
        }
    },
    mounted(){
        this.getProjectItem();
    }
}
</script>

<template>
    <div class="container">
        <div class="row m-5">
            <div class="card p-0">
                <img v-if="project.preview_image" :src="`${this.baseUrl}/storage/${this.project.preview_image}`" class="card-img-top" :alt="`${this.project.title}`">
                <img v-else src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" class="card-img-top" alt="Placeholder Image">
    
                
                <div class="card-body">
                    <h5 class="card-title">{{this.project.title}}</h5>
                    <p class="card-text">Descrizione : <br>
                        {{this.project.description}}
                    </p>
                    <div class="card-text">Tipologia : <br>
                        <p v-if="project.type">{{this.project.type?.name}}</p>
                        <p v-else>Nessuna tipologia assegnata</p>
                    </div>
                    <span>Tecnologia :</span>
                    <div v-if="project.technologies && project.technologies.length > 0">
                        <span v-for="technology in this.project.technologies">
                            {{ technology.name }}<span v-if="index < project.technologies.length - 1">/</span>
                        </span>
                    </div>
                    <p v-else>Nessuna tecnologia assegnata</p>

                </div>
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">

</style>