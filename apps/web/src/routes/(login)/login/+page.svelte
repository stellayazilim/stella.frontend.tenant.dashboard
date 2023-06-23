<script lang="ts">
  import { Button, InputGroup, Inputs } from '@ui/components';
</script>

<section class="w-full h-full flex justify-center items-center">
  <form class="w-80 bg-gray-400 h-96 flex flex-col p-6 gap-4 justify-center">
    <InputGroup oriantation="horizontal">
      <label for="">Epostanız</label>
      <Inputs.TextInput placeholder="Epostanizi giriniz." />
    </InputGroup>
    <InputGroup orientation="horizontal">
      <label for="">Şifreniz</label>
      <Inputs.TextInput placeholder="Sifrenizi giriniz" />
    </InputGroup>

    <div>
      <Button variant="primary">Login</Button>
    </div>
  </form>
</section>
