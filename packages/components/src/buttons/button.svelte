<script lang="ts">
  export let variant: 'primary' | 'success' = 'primary';
  export let size: 'base' | 'lg' | 'xl' = 'base';
  export let iconPos: 'none' | 'left' | 'right' = 'none';
  export let icon: string | undefined = undefined;
</script>

<button class="btn {variant} {size}">
  <slot />
</button>

<!-- boxSizing: "border-box",
display: "flex",
justifyContent: "center",
alignItems: "center",
flexDirection: "row",
paddingLeft: "1rem",/* 16px */
paddingRight: "1rem",/* 16px */
gap: "8px",
height: "40px", -->
<style>
  .base {
    @apply flex  justify-center items-center flex-row;
    @apply p-2;
    @apply rounded-md;
    @apply text-gray-50;
    @apply duration-300;
    @apply border;
  }

  .lg {
    @apply flex  justify-center items-center flex-row;
    @apply py-3 px-4;
    @apply rounded-md;
    @apply text-gray-50;
    @apply duration-300;
    @apply border;
  }
  .xl {
    @apply flex  justify-center items-center flex-row;
    @apply p-2;
    @apply rounded-md;
    @apply text-gray-50;
    @apply duration-300;
    @apply border;
  }
  .primary {
    @apply bg-blue-500;
    @apply border-blue-500;

    &:hover {
      @apply bg-blue-400;
    }

    &:active {
      @apply duration-100;
      @apply ring-1 ring-blue-300;
    }
  }

  .success {
    @apply bg-green-500;
    @apply border-green-500;

    &:hover {
      @apply bg-green-400;
    }

    &:active {
      @apply duration-100;
      @apply ring-1 ring-green-300;
    }
  }
</style>
