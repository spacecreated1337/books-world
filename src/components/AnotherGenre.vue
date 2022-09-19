<template>
  <div>
    <h2
      class="text-default text-center text-lg mt-2 mb-5 font-semibold 2xl:block hidden"
    >
      Не являются жанрами фольклора
    </h2>
    <draggable
      @change="changeNotFolkloreList"
      :list="notFolkloreList"
      group="books"
      itemKey="name"
      :animation="300"
      :handle="getHandleDrag"
      class="2xl:grid-cols-3 gap-x-12 xl:gap-x-5 gap-y-5 2xl:grid sm:grid-cols-2 2xl:mx-auto xsm:grid-cols-1"
    >
      <template #item="{ element }">
        <div
          :key="element"
          class="trans shadow-[0px_4px_4px_rgb(12,110,214,16%)] rounded-xl mb-5 border-2 relative mx-auto handle cursor-move"
          :style="{
            width: `${$store.state.cardBookWidth}px`,
            height: `${$store.state.cardBookHeight}px`,
          }"
          :class="{
            'border-l-green': element.isCorrect,
            'border-l-red-600': element.isCorrect === false,
            shake: element.isCorrect === false,
          }"
          ref="books"
        >
          <div class="pr-8 pl-2 py-6 items-center flex gap-3 justify-evenly">
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
            <div v-if="element.isCorrect" class="absolute top-2 right-3">
              <img src="../assets/img/icon-ok.png" alt="icon-error" />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div
          v-for="(item, idx) in 2"
          :key="idx"
          class="droppable-zone mb-5 mx-auto h-[280px]"
          :style="{
            width: `${$store.state.cardBookWidth}px`,
            height: `${$store.state.cardBookHeight}px`,
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
    notFolkloreList: {
      type: Array,
      required: false,
    },
    emptyFolkloreCells: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getHandleDrag() {
      return this.$store.getters.getHandleDrag;
    },
  },
  methods: {
    changeNotFolkloreList() {
      this.notFolkloreList.forEach((item) => {
        item.isCorrect = null;
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
