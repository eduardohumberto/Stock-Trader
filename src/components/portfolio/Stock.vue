<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>( Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{ danger : insufficientQtd }"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-primary"
                            @click="sellStock"
                            :disabled="insufficientQtd || quantity <= 0 || !Number.isInteger(  quantity )"
                    >{{ insufficientQtd ? 'No enough' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    import  { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data(){
            return {
                quantity: 0
            }
        },
        watch: {
            quantity(val){
                if(this.quantity > 0 && !Number.isInteger(  this.quantity )){
                    this.quantity = Math.ceil( val  );
                }
            }
        },
        computed:{
            insufficientQtd(){
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions('portfolio', {
                placeSelOrder:'sellStock'
            }),
            sellStock(){
                const order = {
                    stockId : this.stock.id,
                    stockPrice : this.stock.price,
                    quantity: this.quantity,
                };
                this.placeSelOrder( order );
                this.quantity = 0;
            }
        }
    }
</script>