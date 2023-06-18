<script lang="ts">
  import NavItem from './nav_item.svelte';

  export let url: URL;
</script>

<aside class="flex h-screen shadow drop-shadow-lg shadow-default-dark-primary">
  <section class="bg-gray-800 w-24 flex flex-col px-6 pt-4">
    <a href="/"> <img src="/stellas.png" alt="" /></a>
  </section>

  <nav class="flex flex-col p-4 bg-blue-gray-400 w-56">
    <img class="bg-blue-gray-100 px-12 py-2" src="/stellalogo.png" alt="" />

    <section class="flex flex-col w-full h-full mt-4 gap-2">
      <NavItem {url} path="/" text="Kullanıcılar" />
      <NavItem {url} path="/" text="Kategoriler" />
      <NavItem {url} path="/" text="Urunler" />
    </section>
  </nav>
</aside>

<div class="w-full">
  <!--#region  header -->
  <header class=" flex-1 flex gap-2 bg-blue-gray-400 p-4">
    <span class="inline-block bg-gray-800 p-2 text-gray-400 rounded"
      >01/02/2023 <span>Persembe</span></span
    >
    <span class="inline-block bg-gray-800 p-2 text-gray-400 rounded">01:23</span>
  </header>
  <!-- #endregion-->
  <!--#region breadCrumb-->
  <section class="border-t px-4 py-1 bg-blue-gray-300">breadCrumb</section>
  <!-- #endregion-->
  <main>
    <slot />
  </main>
</div>
