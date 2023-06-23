<script lang="ts">
  interface $$Props {
    items: { text: string; path: string }[];
  }
  export let items: $$Props['items'] = [];
</script>

<section class="w-full bg-blue-gray-500 flex text-white items-center p-4 font-semibold">
  {#each items as { path, text }, index}
    {#if index + 1 >= items.length}
      <a href={path}> {text}</a>
    {:else}
      <a href={path}> {text}</a> <span class="block px-2">/</span>
    {/if}
  {/each}
</section>
