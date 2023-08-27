<script lang="ts">
  import { page } from "$app/stores";
  import FakeTerminal from "$lib/components/FakeTerminal.svelte";
  let message: string = $page.error?.message ?? "Core Dumped";
</script>

<FakeTerminal link={$page.url + ""}>
  awaiting response...................... <br />{$page.status}: {message}
</FakeTerminal>
