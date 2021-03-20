<template>
  <div class="links">
    <h1>These are your links</h1>
    <LinkList />
    <AddLink />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LinkList from '@/components/LinkList.vue';
import AddLink from '@/components/AddLink.vue';

@Options({
  components: {
    LinkList,
    AddLink,
  },
})
export default class Links extends Vue {}
</script>
