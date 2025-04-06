<template>
  <form
    name="feedback"
    method="POST"
    data-netlify="true"
    @submit="submitted = true"
  >
    <!-- 用來讓 Netlify 辨識這個表單 -->
    <input type="hidden" name="form-name" value="feedback" />

    <p>
      <label>您的名字：
        <input type="text" name="name" required />
      </label>
    </p>

    <p>
      <label>您的心得：
        <textarea name="message" required></textarea>
      </label>
    </p>

    <p>
      <button type="submit">送出</button>
    </p>

    <p v-if="submitted">已送出，感謝您的回饋！</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const submitted = ref(false);
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
}
textarea {
  width: 100%;
  height: 100px;
}
</style>
