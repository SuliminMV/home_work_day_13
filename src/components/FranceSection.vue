<template>
    <div class="france">
        <Menu></Menu>
        <h1>Франция</h1>
        <img src="https://www.gazeta.uz/media/img/2018/07/ISupih15317361019893_b.jpg" alt="france">
        <h3>Состав на финальный матч:</h3>
        <div class="players" v-for="player in players">
            <li>{{player.name}}</li>
        </div>
        <div>
            <input v-model="inputValue" type="text">
            <button v-on:click="transferValue">Следующий чемпион</button>
        </div>
    </div>
</template>

<script>
    import menu from './Menu.vue'

    export default {
        data: function() {
            return{
                inputValue:[],
                players: [
                    {name:'Уго Льорис (к)'},
                    {name:'Бенжамен Павар'},
                    {name:'Рафаэль Варан'},
                    {name:'Самюэль Умтити'},
                    {name:'Лукас Эрнандес'},
                    {name:'Поль Погба'},
                    {name:"Н'Голо Канте"},
                    {name:'Килиан Мбаппе'},
                    {name:'Антуан Гризманн'},
                    {name: 'Блез Матюиди'},
                    {name:'Оливье Жиру'},
                ]
            }
        },

        components: {
            Menu:menu,
        },
        methods:{
            transferValue: function () {
                this.$router.push({path:'italy', query:{inputValue:this.inputValue}})
            }
        },
        created:
            function () {
                this.inputValue = this.$route.query.inputValue;
            }
    }

</script>

<style>

    li {
        margin-top: 5px;
    }

</style>