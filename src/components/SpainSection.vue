<template>
    <div class="spain">
        <Menu></Menu>
        <h1>Испания</h1>
        <img src="https://prostoprosport.ru/wp-content/uploads/2019/07/16128-inesta-havi-torres-kasilyas-gde-seichas-sbornaya-ispanii--chempion-mira2010.jpg"
             alt="spain">
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
                    {name:'Икер Касильяс (к)'},
                    {name:'Серхио Рамос'},
                    {name:'Жерард Пике'},
                    {name:'Карлес Пуйоль'},
                    {name:'Жоан Капдевила<'},
                    {name:'Серхио Бускетс'},
                    {name:"Хаби Алонсо"},
                    {name:'Хави'},
                    {name:'Андрес Иньеста'},
                    {name: 'Педро'},
                    {name:'Давид Вилья'},
                ]
            }
        },

        components: {
            Menu: menu,
        },
        methods:{
            transferValue: function () {
                this.$router.push({path:'germany', query:{inputValue:this.inputValue}})
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