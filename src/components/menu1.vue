<template>
    <!-- <p>Oportunidades</p> -->
    <!-- <p class="text-right">107 registros</p> -->
    
    <nav class="menu_options">
        <section class="con-nav">
            <p class="text-left"><b-icon icon="cursor-fill"/> Oportunidades</p>
            <p class="text-right">107 registros</p>
        </section>
        <hr style="color: #c5c5c5;">
        <ul class="nav nav-pills menu_options_parent">
            <li class="nav-item menu_options_item">
                <a href="#" class="nav-link">Vigentes</a>
            </li>
            <li class="nav-item menu_options_item">
                <a href="#" class="nav-link">Recuperación Cliente</a>
            </li>
            <li class="nav-item menu_options_item">
                <a href="#" class="nav-link">Rechazadas</a>
            </li>
            <li class="nav-item menu_options_item">
                <a href="#" class="nav-link">Perdidas</a>
            </li>
            <li class="nav-item menu_options_item">
                <a href="#" class="nav-link">Concretadas</a>    
            </li>
            <li class="nav-item menu_options_item">
                <a href="#" class="nav-link"><b-icon icon="plus-circle"/> Crear Oportunidad</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.menu_options {
    margin: 2.2em auto;
}
.con-nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: blue;
    font-size: .8em;
    margin-bottom: -2em;
}
.menu_options_parent {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    margin-top: 1em;
}
.menu_options_item {
    text-align: center;
    border-left: 1px solid #b8b6b6;
    font-size: .7em;
}
.menu_options_parent :nth-child(1) {
    border-left: none;
}
</style>