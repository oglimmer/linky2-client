<template>
  <h1>New Link</h1>
  <form @submit.prevent="createLink">
    url: <InputText v-model="linkData.linkUrl"/> <br/>
    tags: <InputText v-model="linkData.tags"/> <br/>
    rss: <InputText v-model="linkData.rssUrl"/> <br/>
    title : <InputText v-model="linkData.pageTitle"/> <br/>
    notes: <InputText v-model="linkData.notes"/> <br/>
    <Button type="submit" label="Add"/> <br/>
  </form>

</template>

<script>
import {Options, Vue} from 'vue-class-component';
import {store} from "@/store";
import {ActionTypes} from "@/store/actions";

@Options({
  props: {
  }
})
export default class AddLink extends Vue {

  linkData = {
    linkUrl: "https://oglimmer.de",
    tags: "all portal",
    rssUrl: "",
    pageTitle: "",
    notes: ""
  };

  async createLink() {
    const clonedLinkData = {
      ...this.linkData,
      tags: this.linkData.tags.split(" ")
    }
    await store.dispatch(ActionTypes.CREATE_LINK, clonedLinkData)
  }

}
</script>

<style scoped>

</style>