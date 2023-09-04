<!--Layout for editistration pages-->
<script>
  import { page } from "$app/stores";
</script>

<link rel="stylesheet" href="/global.css" />
<!--Fontawesome is an icon kit, we should change to a Core Dumped account on production-->
<head>
  <script
    src="https://kit.fontawesome.com/6f53737b3e.js"
    crossorigin="anonymous"
  >
  </script>
</head>
<body>
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
</body>

<style>
  h2 {
    color: #5fb030;
  }
</style>
