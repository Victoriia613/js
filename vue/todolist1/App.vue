
// Homework 
//Створити todolist.

<template>
  <div>
    <h1>To Do List</h1>
    <input v-model="newItem" type="text" :class="hidden" placeholder='Item to add' >
    <button @click="add" :class="hidden">Add</button>
    <input v-model="index" type="number" placeholder='Item to remove'>
<button v-if="items.length!==0" @click="remove(index)">Remove</button>
<p v-if ='show'>You have enough to do for the time being!</p>

<ol>
  <li v-for="(item, index) in items" :key = "index">
    {{item}}</li>
  </ol>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
       items: ['Task1', 'Task2'],
       newItem:'',
       index: '',
       show: false
    }
  },
  computed: {
     hidden(){
      if(this.items.length>=10)
    {
    return 'hidden'; }
    else {return ''}
    }
  },
  methods: {
    add() {
      if (this.newItem.length>0)
      {
      this.items.push(this.newItem)
        this.newItem='';
      }
      if(this.items.length>=10) { this.show=true}
    },
    remove(index)
    {
      index --;
      this.items.splice(index,1)
      if (this.items.length<10) {this.show=false }
      this.index = ''
    } 
  }
}

</script>

<style>
.hidden{display: none}

</style>

