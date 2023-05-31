<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name:'ProjectList',
    components:{
        ProjectCard
    },
    data(){
        return{
            projects:[],
            UrlBase: 'http://localhost:8000',
            currentPage:1,
            lastPage:null,
        }
    },
    methods:{
        getProjects(selectPage){
            axios.get(`${this.UrlBase}/api/projects`,
            {
                params:{
                    page:selectPage,
                }
            }
            )
            .then(response => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        }
    },
    mounted(){
        this.getProjects(1);
    }
}

</script>

<template>
<main>
    <div class="container">
        <div class="row my-5 d-flex justify-content-center">
            <div class="col-3" v-for="project in projects">
                <ProjectCard 
                :nameProject="project"
                :url="this.UrlBase"
                ></ProjectCard>
                
            </div>

        </div>
        <nav class="d-flex justify-content-center">
            <ul class="pagination">
                <li class="page-item" @click="getProjects(currentPage - 1)" :class="{'disabled':currentPage==1}">
                    <button class="page-link">Precedente</button>
                </li>
                <li v-for="(page,index) in this.lastPage" class="page-item" @click="getProjects(index+1)" :class="{'disabled':currentPage==index+1}">
                    <button class="page-link">{{index + 1}}</button>
                </li>
                <li class="page-item" @click="getProjects(currentPage + 1)" :class="{'disabled':currentPage==lastPage}">
                    <button class="page-link">Successiva</button>
                </li>
            </ul>
        </nav>

    </div>

</main>

</template>

<style scoped lang="scss">

</style>