<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>May save & Load</h6>
        <h6>Click on 'End Day' to begin a New Day</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed:{
            ...mapGetters('portfolio',[
                'funds'
            ])
        }
    }
</script>