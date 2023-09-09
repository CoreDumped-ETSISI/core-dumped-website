<script lang="ts">
  import { page } from "$app/stores";
  import ErrorTerminal from "$lib/components/ErrorTerminal.svelte";
  let message: string = $page.error?.message ?? "Core Dumped";
</script>

<ErrorTerminal link={$page.url + ""}>
  awaiting response...................... <br />{$page.status}: {message}
</ErrorTerminal>
