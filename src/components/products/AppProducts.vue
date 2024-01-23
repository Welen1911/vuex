<template>
    <div>
        <p>Valor total: {{ $store.getters.total }}</p>
        {{ product.name }} - {{ product.price }} <br>
        <button v-if="!onCart()" @click="addCart()">Adicionar no carrinho</button>
        <button v-else @click="removeCart()">Remover do carrinho</button>
    </div>
</template>

<script>
    export default {
        props: {
            product: Object
        }, 
        methods: {
            addCart() {
                console.log(this.$store.state);
                this.$store.commit('toCart', this.product);
            },
             onCart() {
                 const object = this.$store.state.cart.find(p => p.id == this.product.id);
                 if (object) {
                    return true;
                 } else {
                    return false;
                 }
             },
            removeCart() {
                this.$store.commit('removeCart', this.product.id);
            }
        }
    }
</script>