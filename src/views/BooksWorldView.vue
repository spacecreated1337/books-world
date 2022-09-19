<template>
  <div class="bg-[#ECF6E9] relative">
    <section class="bg-white mx-64 2xl:mx-40 xl:mx-28 md:mx-10">
      <nav class="smx:h-20 h-14 flex items-center smx:px-12 px-3">
        <div>
          <router-link class="flex items-center" to="/">
            <div>
              <img src="../assets/img/green-arrow.svg" alt="" />
            </div>
            <p class="text-green ml-2 font-normal">Назад</p>
          </router-link>
        </div>
      </nav>
      <div class="smx:px-12 xsm:px-5 px-16 pb-20">
        <div
          class="text-center gradi-strip text-white md:text-2xl text-4xl sm:py-4 md:py-7 py-10 rounded-3xl font-semibold"
        >
          <h1>В мире книг</h1>
        </div>
        <transition name="fade">
          <div
            v-show="notAllMoved"
            class="px-5 fixed xl:top-[-5px] top-10 z-10 2xl:py-2 py-5 right-1/2 xl:translate-y-2/4 translate-x-2/4 text-center font-semibold text-4xl xl:text-2xl text-white bg-red-500 rounded-2xl"
          >
            Переместите все книжки
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="isFolkloreListOk && isNotFolkloreListOk"
            class="px-5 fixed xl:top-[-5px] top-10 z-10 2xl:py-2 py-5 right-1/2 xl:translate-y-2/4 translate-x-2/4 text-center font-semibold text-4xl xl:text-2xl text-white bg-green rounded-2xl"
          >
            Все верно!
          </div>
        </transition>
        <div class="mt-10">
          <div>
            <div class="grid grid-cols-2 2xl:grid-cols-1 gap-x-10 mt-10">
              <books-list :books="books" />
              <div>
                <div
                  class="grid grid-cols-2 grid-rows-1 self-start ml-auto 2xl:hidden"
                >
                  <h2
                    class="text-default text-center text-lg mt-2 mb-5 font-semibold"
                  >
                    Жанры фольклора
                  </h2>
                  <h2
                    class="text-default text-center text-lg mt-2 mb-5 font-semibold"
                  >
                    Не являются жанрами <br />
                    фольклора
                  </h2>
                </div>
                <div
                  class="2xl:mx-auto 2xl:block grid grid-cols-2 gap-x-5 grid-rows-1 self-start"
                >
                  <required-genre
                    :folkloreList="folkloreList"
                    :emptyFolkloreCells="emptyFolkloreCells"
                  />
                  <another-genre
                    :notFolkloreList="notFolkloreList"
                    :emptyFolkloreCells="emptyFolkloreCells"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5">
            <button
              class="bg-green text-white py-3 px-12 rounded-3xl"
              @click="checkList"
            >
              Проверить
            </button>
          </div>
        </div>
      </div>
    </section>
    <div>
      <img class="w-full" src="../assets/img/footer-books.png" alt="" />
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import BooksList from "@/components/BooksList.vue";
import RequiredGenre from "@/components/RequiredGenre.vue";
import AnotherGenre from "@/components/AnotherGenre.vue";
export default {
  name: "BooksWorldView",
  components: {
    draggable,
    BooksList,
    RequiredGenre,
    AnotherGenre,
  },
  data() {
    return {
      emptyFolkloreCells: 3,
      folkloreList: [],
      notFolkloreList: [],
      books: [
        {
          id: 1,
          img: require("../assets/img/russian-story.png"),
          name: "russian-story",
          type: "folklore",
        },
        {
          id: 2,
          img: require("../assets/img/russian-songs.png"),
          name: "russian-songs",
          type: "folklore",
        },
        {
          id: 3,
          img: require("../assets/img/peter-pan.png"),
          name: "peter-pan",
          type: "any",
        },
        {
          id: 4,
          img: require("../assets/img/roverbs-and-sayings.png"),
          name: "roverbs-and-sayings",
          type: "folklore",
        },
        {
          id: 5,
          img: require("../assets/img/homeland.png"),
          name: "homeland",
          type: "any",
        },
        {
          id: 6,
          img: require("../assets/img/about-childrens.png"),
          name: "about-childrens",
          type: "any",
        },
      ],
      isCorrect: null,
      notAllMoved: false,
      isFolkloreListOk: false,
      isNotFolkloreListOk: false,
    };
  },
  methods: {
    checkList() {
      if (this.books.length !== 0) {
        this.books.forEach((item) => {
          item.isCorrect = false;
          setTimeout(() => {
            item.isCorrect = null;
          }, 3000);
        });
        this.notAllMoved = true;
        setTimeout(() => {
          this.notAllMoved = false;
        }, 3000);
        return;
      }
      this.checkFolkloreList();
      this.checkNotFolkloreList();
    },

    checkFolkloreList() {
      this.folkloreList.forEach((item) => {
        if (item.type === "folklore") {
          item.isCorrect = true;
        } else {
          item.isCorrect = false;
        }
      });
      let allOk = this.folkloreList.every((item) => item.isCorrect);
      if (allOk) {
        this.isFolkloreListOk = true;
        setTimeout(() => {
          this.isFolkloreListOk = false;
        }, 3000);
      }
    },

    checkNotFolkloreList() {
      this.notFolkloreList.forEach((item) => {
        if (item.type === "any") {
          item.isCorrect = true;
        } else {
          item.isCorrect = false;
        }
      });
      let allOk = this.notFolkloreList.every((item) => item.isCorrect);
      if (allOk) {
        this.isNotFolkloreListOk = true;
        setTimeout(() => {
          this.isNotFolkloreListOk = false;
        }, 3000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 8px;
}
.gradi-strip {
  background: linear-gradient(90deg, #3f8cff 0.06%, #60b9a6 99.94%);
  box-shadow: 0px 14px 16px rgba(12, 110, 214, 0.25);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
