<template>
    <section class="menu_datos">
        <ul class="menu_datos_parent">
            <li class="menu_datos_item">85<br>Empresas</li>
            <li class="menu_datos_item">107<br>Oportunidades</li>
            <li class="menu_datos_item">1.454.191,63 Usd<br>Mensuales</li>
            <li class="menu_datos_item">4.205,00 Usd<br>Gastos</li>
        </ul>
        <table class="table_probabilidad">
            <tr><th colspan="3" style="background-color: #cac8c865;color:#0000ff;font-size:.8em;">Probabilidad</th></tr>
            <tr>
                <td>
                    <b-icon icon = "arrow-down" class="text-danger"/> 28% <br>
                    Baja
                </td>
                <td>
                    <b-icon icon = "arrow-right" class="text-warning"/>41.1% <br>
                    Media
                </td>
                <td>
                    <b-icon icon = "arrow-up" class="text-success"/>30.8% <br>
                    Alta
                </td>
            </tr>
        </table>
        <button class="btn_filtrar btn btn-success">Filtrar</button>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* *::before,
*::after,
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} */
.menu_datos {
    display: flex;
    margin-top: -1.2em;
}
.menu_datos_parent {
    width: 38em;
    display: flex;
    background-color: blue;
    color: #fff;
}
.menu_datos_item {
    width: 100%;
    text-align: center;
    border-left: 1px solid #b8b6b6;
    padding: 3px;
}
.table_probabilidad {
    width: 15em;
    text-align: center;
    margin-left: 1em;
    /* border: 1px solid #b8b6b6; */
}
td {
    font-size: .8em;
    color: #0000ff;
    border: 1px solid #d3d2d2;
    border-top: none;
}
.btn_filtrar {
    width: 6em;
    height: 2em;
    line-height: 1;
    /* background-color: #16920b;
    color: #fff; */
    border: none;
    border-radius: 3px; 
    margin-left: 2em;
    margin-top: .5em;
    cursor: pointer;
}
</style>