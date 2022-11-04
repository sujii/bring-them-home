import {defineStore} from "pinia";
import { ref } from "vue";

// defineStore 関数を用いてストアを作成する
// 第一引数 "counter" はアプリケーション全体でストアを特定するためのユニークキー
export const useCounterStore = defineStore("counter",() => {
  const count = ref(0);

  const doubleCount = () => {
    return count.value * 2;
  };

  const increment = () => {
    count.value++;
  };

  return {
    count,
    doubleCount,
    increment
  }

})