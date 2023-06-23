<script lang="ts">
  import '../../app.css';
  import { MainLayout } from '@ui/layouts';
  import { page } from '$app/stores';
</script>

<MainLayout url={$page.url}>
  <slot />
</MainLayout>
