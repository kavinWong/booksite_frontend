<script setup>
import { useRouter } from 'vue-router'
import { getBookInfo } from "@/api/book";
import { createOrder } from "@/api/order";
import { ref } from 'vue'

const router = useRouter();
const tips = ref('')
const info = ref({})
const order = ref({customer:'', phone:''})

getBookInfo(router.currentRoute.value.query.id)
  .then((res) => {
    info.value = res.data
  }).catch((err) => console.log(err));

function submit(){
  var params = {
    customer:order.value.customer,
    phone:order.value.phone,
    book_id:info.value._id,
  }
  createOrder(params)
    .then((res) => {
      if (res.code == 200) {
        router.push({name:'successful',query: {id:res.data.order_id}})
      } else {
        tips.value = res.msg
      }
    }).catch((err) => console.log(err));
}

</script>

<template>
  <div class="main">
    <h1>You are going to pre-order the book:<font color="red">{{tips}}</font></h1>
    <div class="book-detail">
      <h3>{{info.name}}</h3>
      <div class="book-more">
        <p>Category: {{info.category}}</p>
        <span>${{info.price}}</span>
      </div>
    </div>
    <div class="form">
      <div class="item">
        <label for="customer">Customer name:</label>
        <input type="text" id="customer" placeholder="Customer name" v-model="order.customer" />
      </div>
      <div class="item">
        <label for="phone">Phone number:</label>
        <input type="text" id="phone" placeholder="Phone number" v-model="order.phone" />
      </div>

      <button class="submit" @click="submit">Submit</button>
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
