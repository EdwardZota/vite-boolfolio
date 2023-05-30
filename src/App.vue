<script >

import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';

export default {
  components:{
    MyHeader,
    MyMain
  }
}
</script>

<template>
<MyHeader></MyHeader>

<MyMain></MyMain>



</template>

<style lang="scss">
@use './styles/general.scss';

</style>

