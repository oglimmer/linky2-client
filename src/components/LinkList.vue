<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <a :href="link.linkUrl" target="_blank">{{link.pageTitle}}</a>  (TAGS:{{link.tags}})
    </li>
  </ul>
</template>

<script>
import {Options, Vue} from 'vue-class-component';
import {store} from "@/store";
import {ActionTypes} from "@/store/actions";

@Options({
  props: {
  }
})
export default class LinkList extends Vue {

  get links() {
    return store.state.links
  }

  beforeMount() {
    store.dispatch(ActionTypes.LOAD_LINK)
  }

}
</script>

<style scoped>

</style>