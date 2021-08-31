<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <couter />
  <couter-squared/>
  <p>Random numbers</p>
  <buttons/>
  <p>Single numbers</p>
  <buttons-single/>
  <p>Set value to zero</p>
  <buttons-zero/>
  <p>Color changer</p>
  <color-code/>
  
  
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  
  components: {
    'couter': require('@/components/Counter.vue').default,
    'couter-squared': require('@/components/CounterSquared.vue').default,
    'buttons' : require('@/components/ButtonsRnd.vue').default,
    'color-code' : require('@/components/ColorCode.vue').default,
    'buttons-single' :require('@/components/ButtonsSingle.vue').default,
    'buttons-zero' :require('@/components/ButtonSetToZero.vue').default,
  }
}
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttonsrnd button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
  color: red;
  background-color: #158D67;
}
.buttonssingle button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
  color: green;
}
.zero button{
  font-size: 40px;
  width: 100px;
  margin: middle;
  color: green;
}

</style>
