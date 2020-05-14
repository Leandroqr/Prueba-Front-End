<template>
    <nav class="menu_opciones_dos">
        <ul class="menu_dos_parent">
            <li class="menu_dos_item">Todo <b-icon icon="bag-fill"></b-icon></li>
            <li class="menu_dos_item">Identificación <b-icon icon="diamond-fill"></b-icon></li>
            <li class="menu_dos_item">Información <b-icon icon="display"></b-icon></li>
            <li class="menu_dos_item">Estudio interno <b-icon icon="exclamation-circle"></b-icon></li>
            <li class="menu_dos_item">Innovación & desarrollo <b-icon icon="exclamation-square-fill"></b-icon></li>
            <li class="menu_dos_item">Oferta <b-icon icon="gear"></b-icon></li>
            <li class="menu_dos_item">Muestra <b-icon icon="exclude"></b-icon></li>
            <li class="menu_dos_item">Negociacion <b-icon icon="circle-fill"></b-icon></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.menu_opciones_dos {
    line-height: 2;
    margin-top: 1em;
    border: 1px solid #615f5f;
}
.menu_dos_parent {
    display: flex;
    width: 63em;
    margin:auto;
}
.menu_dos_item {
    width: 100%;
    font-size: 10px;
    border-left: 1px solid;
    text-align: center;
}
.menu_dos_parent :nth-child(1){
    border-left: none;
}
</style>
