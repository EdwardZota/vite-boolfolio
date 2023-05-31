<script>
export default {
    name: 'MyHeader',
    data(){
        return{
            menu:[
                {
                    label:'Home',
                    routeName: 'home'
                },
                {
                    label:'Progetti',
                    routeName: 'ProjectList'
                },
                {
                    label:'Contatti',
                    routeName: 'contact'
                }
            ]
        }
    }

}
</script>

<template>
    
<header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-for="menuItem in menu">
                    <router-link :to="{ name: menuItem.routeName}" class="nav-link">{{ menuItem.label }}</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</header>

</template>

<style scoped lang="scss">

</style>