<template>
  <section class="my-12">
    <div class="container mx-auto sm:px-10 lg:px-28 px-80">
      <div>
        <h2 class="text-green text-4xl font-bold lg:text-center text-left">
          В мире книг
        </h2>
        <div
          class="my-9 bg-card lg:py-8 py-6 px-16 rounded-br-3xl rounded-bl-3xl border-t-green border-2 xsm:px-6 xsm:py-3"
        >
          <h3 class="text-default font-bold text-2xl">Инструкция:</h3>
          <p class="text-default text-lg mt-2 font-semibold">
            Распредели книги, ориентируясь на названия, по соответствующим
            рубрикам таблицы: «Жанры фольклора», «Не являются жанрами
            фольклора».
          </p>
        </div>
        <div class="lg:text-center text-left">
          <router-link
            class="bg-green text-white py-3 px-12 rounded-3xl"
            to="/booksworld"
            >Продолжить</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>
<style lang="scss" scoped>
.bg-card {
  background: rgba(0, 0, 0, 0.05);
}
</style>
