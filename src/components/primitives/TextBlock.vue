<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    title: {
      type: String ,
      default: "Default title"
    },
    message: {
      type: String ,
      default: "Default text. Provide content true props :title and :message"
    }
  }
};
</script>

<style>
</style>
