<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name:'MyMain',
    components:{
        ProjectCard
    },
    data(){
        return{
            projects:[],
            UrlBase: 'http://localhost:8000',
        }
    },
    methods:{
        getProjects(){
            axios.get('http://localhost:8000/api/projects')
            .then(response => {
                console.log(response)
                this.projects = response.data.results;
            })
        }
    },
    mounted(){
        this.getProjects();
    }
}

</script>

<template>
<main>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="project in projects">
                <ProjectCard 
                :nameProject="project"
                :url="this.UrlBase"
                ></ProjectCard>
                
            </div>

        </div>

    </div>

</main>

</template>

<style scoped lang="scss">

</style>
