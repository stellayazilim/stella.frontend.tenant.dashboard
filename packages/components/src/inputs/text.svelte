<script lang="ts">
  interface $$Props {
    placeholder: string | undefined;
  }

  export let placeholder;
</script>

<input type="text" {placeholder} />

<style>
  input {
    @apply p-2 bg-gray-100;
  }
</style>
