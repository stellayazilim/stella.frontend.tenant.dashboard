<script lang="ts">
  export let icon: string = '';
  export let text: string = '';
  export let path: string;
  export let url: URL;
</script>

<a class:active={url.pathname == path} href={path}>
  <i class={icon} />
  {text}
</a>

<style>
  a {
    @apply p-2;
  }
  .active {
    @apply bg-blue-gray-500;
  }
</style>
