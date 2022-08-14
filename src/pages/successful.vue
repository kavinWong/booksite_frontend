<script setup>
import { useRouter } from 'vue-router'
import { findOrder } from "@/api/order";
import { ref } from 'vue'

const router = useRouter();
const info = ref({})

findOrder(router.currentRoute.value.query.id)
  .then((res) => {
    if (res.code == 200) {
      info.value = res.data
    }
  }).catch((err) => console.log(err));

</script>

<template>
  <div class="main">
    <h1>The pre-order is created successfully:</h1>
    <div class="form">
      <div class="item">
        <label>Order Number:</label>
        <span>{{info.order_num}}</span>
      </div>
      <div class="item">
        <label>Customer name:</label>
        <span>{{info.customer}}</span>
      </div>
      <div class="item">
        <label>Phone number:</label>
        <span>{{info.phone}}</span>
      </div>

      <div class="book-detail">
      <h3>{{info.book_name}}</h3>
      <div class="book-more">
        <p>Category: {{info.book_category}}</p>
        <span>${{info.amount}}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.main{
  padding: 1rem;
}

h1{
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;
}

.book-detail{
  background: #eee;
  padding: .7rem;
  margin: 1rem 0;
}

.book-more{
  display: flex;
  width: 100%;
  
}
.book-more span{
  margin-left: auto;
}

.form{ margin-top: 2rem;}
.form .item{
  display: flex;
  margin-bottom: .5rem;
}
.form label{
  display: inline-block;
  min-width: 40%;
}
input{
  border: #eee 1px solid;
  padding: .3rem .1rem;
}

.submit{
  margin: 2rem auto 0;
  background: #96b97d;
  display: block;
  padding: .2rem 0;
  width: 5rem;
  text-align: center;
  color: #fff;
}
</style>
