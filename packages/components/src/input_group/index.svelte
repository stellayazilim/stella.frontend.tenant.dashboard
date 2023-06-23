<script lang="ts">
  interface $$Props {
    oriantation: 'horizontal' | 'vertical';
  }

  export let oriantation: $$Props['oriantation'] = 'horizontal';
</script>

<div
  class:flex-col={oriantation == 'horizontal'}
  class:flex-row={oriantation == 'vertical'}
  class="flex gap-2"
>
  <slot />
</div>
