<template>
  <div>
    <draggable
      :list="books"
      group="books"
      itemKey="name"
      class="grid-cols-2 2xl:grid-cols-3 gap-x-5 xl:gap-x-5 gap-y-5 grid xsm:grid-cols-1 2xl:mx-auto self-start sm:grid-cols-2 mt-[84px] 2xl:mt-0"
      :animation="300"
      :handle="getHandleDrag"
      uk-grid
    >
      <template #item="{ element }">
        <div
          :key="element"
          class="trans shadow-[0px_4px_4px_rgb(12,110,214,16%)] rounded-xl items-start handle cursor-move"
          ref="book"
          :class="{
            'border-l-green': element.isCorrect,
            'border-l-red-600': element.isCorrect === false,
            shake: element.isCorrect === false,
          }"
        >
          <div class="pr-8 pl-2 py-6 items-center justify-evenly flex gap-3">
            <div class="icon-handle">
              <img
                @contextmenu.prevent
                src="../assets/img/icon-drag.png"
                alt="icon-drag"
              />
            </div>
            <div>
              <img :src="element.img" :alt="element.name" />
            </div>
            <div
              v-if="element.isCorrect === false"
              class="absolute top-2 right-3"
            >
              <img src="../assets/img/icon-error.png" alt="icon-error" />
            </div>
          </div>
        </div>
      </template>
      <template #footer v-if="books.length == 0">
        <div
          v-for="(item, idx) in 2"
          :key="idx"
          class="droppable-zone mb-5"
          :style="{
            width: `${$store.getters.getCardWidth}px`,
            height: `${$store.getters.getCardHeight}px`,
          }"
        ></div>
      </template>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  props: {
    books: {
      type: Array,
      required: false,
    },
  },
  mounted() {
    window.addEventListener("resize", this.calcWidthCard);
    setTimeout(() => {
      this.calcWidthCard();
    }, 400);
    window.addEventListener("resize", this.handleDrag);
    this.handleDrag();
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.calcWidthCard);
    window.addEventListener("resize", this.handleDrag);
  },
  methods: {
    calcWidthCard() {
      if (this.books.length === 0) {
        return;
      }
      this.$store.dispatch("setCardBookSize", {
        width: this.$refs.book.clientWidth,
        height: this.$refs.book.clientHeight,
      });
    },

    handleDrag() {
      if (window.innerWidth > 1600) {
        this.$store.dispatch("setHandleDrag", ".handle");
        return;
      }
      this.$store.dispatch("setHandleDrag", ".icon-handle");
    },
  },
  computed: {
    getHandleDrag() {
      return this.$store.getters.getHandleDrag;
    },
  },
};
</script>
<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
