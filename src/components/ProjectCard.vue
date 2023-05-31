<script>
export default{
    name:'ProjectCard',
    props:{
        nameProject:Object,
        url:String
    }

}

</script>

<template>

    <div class="card" style="width: 18rem;">
        <img v-if="nameProject.preview_image" :src="`${this.url}/storage/${this.nameProject.preview_image}`" class="card-img-top" :alt="`${this.nameProject.title}`">
        
        <img v-else src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" class="card-img-top" alt="Placeholder Image">
    
        <div class="card-body">
            <h5 class="card-title">{{this.nameProject.title}}</h5>
            <p class="card-text">Descrizione : <br>
                {{this.nameProject.description}}
            </p>
            <div class="card-text">Tipologia : <br>
                <p v-if="nameProject.type">{{this.nameProject.type?.name}}</p>
                <p v-else>Nessuna tipologia assegnata</p>
            </div>
            <span>Tecnologia :</span>
            <div v-if="nameProject.technologies && nameProject.technologies.length > 0">
                <span v-for="(technology,index) in this.nameProject.technologies">
                    {{ technology.name }}<span v-if="index < nameProject.technologies.length - 1">/</span>
                </span>
            </div>
            <p v-else>Nessuna tecnologia assegnata</p>

            <router-link :to="{name: 'ProjectCard' , params: {slug: nameProject.post_slug}}" class="btn btn-primary">Dettagli Progetto</router-link>
        </div>
    </div>
    
    
    
</template>
    
<style scoped lang="scss">
    
</style>