<template>
    <div class="italy">
        <Menu></Menu>
        <h1>Италия</h1>
        <img src="https://cdn.footballua.tv/i/image_650x360/uploads/football-www/novosti/1511452389809.jpg" alt="italy">
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
                    {name:'Джанлуиджи Буффон'},
                    {name:'Фабио Гроссо'},
                    {name:'Фабио Каннаваро (к)'},
                    {name:'Джанлука Дзамбротта'},
                    {name:'Марко Матерацци'},
                    {name:'Дженнаро Гаттузо'},
                    {name:"Франческо Тотти"},
                    {name:'Мауро Каморанези'},
                    {name:'Симоне Перротта'},
                    {name: 'Андреа Пирло'},
                    {name:'Лука Тони'},
                ]
            }
        },
        components: {
        Menu:menu,
    },
        methods:{
            transferValue: function () {
                this.$router.push({path:'spain', query:{inputValue:this.inputValue}})
            }
        },
        created:
            function () {
                this.inputValue = this.$route.query.inputValue;
            }

    }

</script>

<style>
    h3 {
        /*color: whitesmoke;*/
    }

    li {
        margin: 5px 0;
        color: #030303;
    }

</style>