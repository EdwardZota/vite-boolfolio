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
        <img :src="`${this.url}/storage/${this.nameProject.preview_image}`" class="card-img-top" :alt="`${this.nameProject.title}`">
        <div class="card-body">
            <h5 class="card-title">{{this.nameProject.title}}</h5>
            <p class="card-text">Descrizione : <br>
                {{this.nameProject.description}}
            </p>
            <p class="card-text">Tipologia : <br>
                {{this.nameProject.type?.name}}
            </p>
            <p class="card-text">Tecnologia : <br>
                <span v-for="technology in this.nameProject.technologies">
                    {{ technology.name }},
                </span>
            </p>
        </div>
    </div>
    
    
    
</template>
    
<style scoped lang="scss">
    
</style>