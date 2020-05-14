<template>
    <div>
        <h1>Идёт загрузочка.....</h1>
        <img src="https://ss.sport-express.ru/userfiles/materials/107/1079080/large.jpg" alt="Putin">
    </div>
</template>

<script>
export default {
    mounted: function () {
        setTimeout(function () {
            this.$router.push({path:'italy'})
        }.bind(this),3000);
    }

}

</script>