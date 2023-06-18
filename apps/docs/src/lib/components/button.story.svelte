<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import { Button } from '@ui/components';
  export let Hst: Hst;
</script>

<Hst.Story title="Button">
  <Hst.Variant title="Primary">
    <Button variant="primary" size="base">Button</Button>
    <div class="flex flex-col gap-4">
      <div>
        <Button variant="primary" size="base">Button</Button>
      </div>
      <div>
        <Button variant="primary" size="lg">Button</Button>
      </div>

      <div>
        <Button variant="primary" size="xl">Button</Button>
      </div>
    </div>
  </Hst.Variant>

  <Hst.Variant title="Success">
    <Button variant="success">Base</Button>
  </Hst.Variant>
</Hst.Story>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
