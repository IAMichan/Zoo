<template>
    <button type="text" class="text-sm bg-green-500 font-semibold h-10 text-white px-2 rounded-md hover:bg-green-700">
      {{ index }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'GreenButton',
    props: {
      index: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
    .bg-green-500:hover {
      background-color: #388E3C;
    }
  </style>
  