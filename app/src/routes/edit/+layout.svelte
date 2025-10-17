<!--Layout for editistration pages-->
<script>
  import { page } from "$app/stores";
  import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<link rel="stylesheet" href="/global.css" />

  <header>
    <h2>Admin Mode</h2>
    <div class="topnav">
      <a
        href="/edit/cartas"
        class:active={$page.url.pathname === "/edit/cartas"}>Cartas</a
      >
      <a
        href="/edit/personas"
        class:active={$page.url.pathname === "/edit/personas"}>Personas</a
      >
    </div>
  </header>

  <div class="slot">
    <slot />
  </div>
  <footer>
    <div class="footer_wrap">
      <a href="/"><img src="/logo.png" alt="Logo" class="logo" /></a>
    </div>
  </footer>

<style>
  h2 {
    color: #5fb030;
  }
</style>
