<template>
  <div id="app">
    <input v-model="form.cardHolder" placeholder="cardHolder">
    <input v-model="form.cardNumber" placeholder="cardNumber">
    <select v-model="form.expirationMonth">
      <option disabled value="">Month</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <select v-model="form.expirationYear">
      <option disabled value="">Year</option>
      <option>2019</option>
      <option>2020</option>
      <option>2021</option>
    </select>
    <input v-model="form.cvc" placeholder="cvc">
    <button class="btn btn-primary" @click.prevent="submit">Submit!</button>
  </div>
</template>

<script>
export default {
  data () {
    return { 
      form: {
        cardHolder: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvc: '',
      }
    }
  },
  methods: {
    submit() {
      if (!this.form.cardNumber) {
        alert('Card number is required');
        return;
      }
      alert(JSON.stringify(this.form));
    }
  },
};

</script>
