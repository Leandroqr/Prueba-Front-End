<template>
    <b-row class="mt-1">
        <b-col v-for="(data, key) in articulos" :key="`articulo-${key}`" cols="12" md="3" class="mt-2">
            <section class="card mt-2 mb-2 shadow bg-white rounded" style="max-width: 20rem;">
                <h6 class="text-right mt-3 mr-2">{{data.codigo}}</h6>
                <img style="background-color: #EFEFEF;" class="card-img-top mx-auto d-block" :src="require(`../assets/${data.img}`)" alt="Articulo">
                <section class="text-center">
                    <h6 class="card-title mt-3" style="font-size: .8em;">{{data.titulo}}<br><p class="text-muted">Ciudad, Pais</p></h6>
                   <hr style="margin-top: -.8em;">
                   <h6 class="" style="font-size: .7em;">{{data.nombre}}</h6>
                   <p class="" style="font-size: .8em;color:#0000ff;">Mensual <span class="text-primary">40,00 millares</span></p>
                   <p class="" style="font-size: .8em;color:#0000ff;background-color: #cac8c865;margin-top: -1em;">Identificada <span class="text-muted">hace 365 dias</span></p>
                   <section class="container">
                       <h6 style="font-size: .8em;margin-top: -1em;">Hayssil Ayala</h6>
                       <hr style="margin-top: -.3em;">
                       <section class="cont" style="margin-top: -1em;">
                           <p class="text-center" style="font-size: .8em">
                               85% <br>
                               <span class="text-muted" style="font-size: .8em;">visita para correr</span>
                           </p>
                           <p class="mt-2" style="font-size: .8em"><b-icon icon = "arrow-right" class="text-success"></b-icon>Alta</p>
                       </section>
                       <hr style="margin-top: -1em;">
                       <h6 class="" style="font-size: .7em;">{{data.gastos}}</h6>
                   </section>
                </section>
            </section>
        </b-col>
    </b-row>

    <!-- <b-row class="mt-3">
        <b-col v-for="(data, key) in articulos" :key="`articulo-${key}`" cols="12" md="3" class="mt-2">
            <b-card  
                :title="`${data.titulo}`"
                :img-src="require(`../assets/${data.img}`)"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem;"
                class="mb-2 shadow p-3 bg-white rounded"
            >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary"><b-icon  icon = "arrow-up" > </b-icon>Go somewhere</b-button>
            
            </b-card>
        </b-col>
    </b-row> -->

</template>

<script>
export default {
    components: {},
    data() {
        return {
            articulos: [
            {codigo: '0P-0096', img: 'mozarella.jpeg', titulo: 'LACTOSA', nombre: 'BOLSAS POUCH PARA QUESO MOZ...', gastos: 'Gastos 0,00 Usd'},
            {codigo: '0P-0097', img: 'maizenados.jpeg', titulo: 'UNILEVER EL SALVADOR', nombre: 'LIENZO MULT BCO TERM 220X00', gastos: 'Gastos 19,00 Usd'},
            {codigo: '0P-0098', img: 'maizenauno.jpeg', titulo: 'UNILEVER EL SALVADOR', nombre: 'BOB LOPEC TC TRANS 50 GR', gastos: 'Gastos 0,00 Usd'},
            {codigo: '0P-0098', img: 'xtra.jpeg', titulo: 'UNILEVER HONDURAS', nombre: 'LAMINA JABON XTRA', gastos: 'Gastos 10,00 Usd'},
            {codigo: '0P-0100', img: 'surf.jpeg', titulo: 'UNILEVER HONDURAS', nombre: 'BOLSA JABON SURF', gastos: 'Gastos 19,00 Usd'},
            {codigo: '0P-0103', img: 'mozarella.jpeg', titulo: 'ALGUIERS', nombre: 'BOLSAS POUCH PARA QUESO MOZ...', gastos: 'Gastos 10,00 Usd'},
            {codigo: '0P-0104', img: 'mozarella.jpeg', titulo: 'AGUA MIGUELEÑA', nombre: 'BOLSAS POUCH PARA QUESO MOZ...', gastos: 'Gastos 20,00 Usd'},
            {codigo: '0P-0106', img: 'mozarella.jpeg', titulo: 'EL BARATILLO', nombre: 'BOLSAS POUCH PARA QUESO MOZ...', gastos: 'Gastos 10,00 Usd'},
            {codigo: '0P-0107', img: 'mozarella.jpeg', titulo: 'CASTALLA Y SAGARRA', nombre: 'BOLSAS POUCH PARA QUESO MOZ...', gastos: 'Gastos 10,00 Usd'}
        ]
        }
    }
}
</script>

<style scoped>
h6 {
    color: blue;
}
.cont {
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
</style>