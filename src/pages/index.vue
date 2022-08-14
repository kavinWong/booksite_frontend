<script setup>

import { getBookList } from "@/api/book";
import { ref } from 'vue'

const books = ref([]);
const loadTip = ref('loading......');
let page = 1;
let loading = false;
function findDataByPage(){
  if (loading) return;
  loading = true;

  getBookList(page, function(res){
    if (res.code == 200) {
      page ++;
      if (res.data.length) {
        for (var item of res.data) {
          books.value.push(item)
        }
        if (res.data.length == 20) loading = false;
      }

      if (loading) loadTip.value = 'loaded.'
    }
  })
}
findDataByPage()

window.addEventListener('scroll', function(){
  var scrollHeight = document.documentElement.scrollTop + window.innerHeight;
  var distance = 200; // The larger the value, the earlier the loading
  var totalHeight = document.body.offsetHeight - distance;
  if (scrollHeight >= totalHeight) {
    findDataByPage()
  }
})
</script>

<template>
  <ul>
    <li v-for="item in books">
      <h3>{{item.name}}</h3>
      <p>Category: {{item.category}}</p>
      <div class="bottom">
        <span>${{item.price}}</span>
        <router-link :to="{name:'pre-order', query: {id:item._id}}">Add</router-link>
      </div>
    </li>
  </ul>
  <p class="tips">{{loadTip}}</p>
</template>

<style scoped>
li{
  background: #eee;
  margin: .5rem .5rem 0 .5rem;
  padding: .7rem;
}
li h3 {
  font-size: 1rem;
}
p{
  margin-top: .4rem;
}
.bottom{
  display: flex;
  width: 100%;
}
.bottom a{
  margin-left: auto;
  background: #96b97d;
  display: inline-block;
  width: 5rem;
  text-align: center;
  color: #fff;
}
.tips{
  text-align: center;
}
</style>
