<template>
    <div class="germany">
        <Menu></Menu>
        <h1>Германия</h1>
        <img src="https://image.zn.ua/media/images/645x426/Jul2014/93339.jpg" alt="germany">
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
                    {name:'Мануэль Нойер'},
                    {name:'Филипп Лам (к)'},
                    {name:'Жером Боатенг'},
                    {name:'Матс Хуммельс'},
                    {name:'Бенедикт Хёведес'},
                    {name:'Кристоф Крамер'},
                    {name:"Бастиан Швайнштайгер"},
                    {name:'Томас Мюллер'},
                    {name:'Тони Кроос'},
                    {name: 'Месут Озил'},
                    {name:'Мирослав Клозе'},
                ]
            }
        },

        components: {
            Menu:menu,
        },
        methods:{
            transferValue: function () {
                this.$router.push({path:'france', query:{inputValue:this.inputValue}})
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