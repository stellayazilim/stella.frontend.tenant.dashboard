<script>
  function fib(n) {
    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
  }
</script>

<a href="/#" class="text-red-300"> {fib(8)}</a>
