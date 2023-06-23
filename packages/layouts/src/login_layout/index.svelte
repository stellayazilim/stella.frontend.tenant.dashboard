<script lang="ts">
  interface $$Props {
    bg: string | undefined;
  }

  export let bg: $$Props['bg'] = undefined;
</script>

<div class="flex-1 flex w-full h-screen bg-gray-500">
  <div class="w-full"><slot /></div>
  <div id="bg" style="background-image: url('{bg}')" class="w-full bg-gray-600" />
</div>

<style>
  #bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
