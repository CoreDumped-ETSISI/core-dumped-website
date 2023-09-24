<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  function redirect_page(): void {
    goto("/", {
      invalidateAll: true,
    });
  }
</script>

<link rel="stylesheet" href="/global.css" />

<div class="error">
  <p>HTTP: <span>404</span></p>
  <pre>
  <code><span>this_page</span>.<em>not_found</em> = true;</code>
<code
      ><span>if</span> (<b>you_spelt_it_wrong</b>)&lbrace;<br /><span
        >try_again();</span
      ><br />&rbrace;</code
    >
    <code
      ><span>else if (<b>we_screwed_up</b>)</span> &lbrace;<br /><em>alert</em
      >(<i>"We're really sorry about that."</i>); <br /><span>window</span>.<em
        >location</em
      > = home;<br /> &rbrace;</code
    ></pre>
  <center><button on:click={redirect_page}>Volver</button></center>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Bevan");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .error {
    background: #282828;
    overflow: hidden;
    height: 100vh;
  }

  p {
    font-family: "Bevan", cursive;
    font-size: 130px;
    margin: 10vh 0 0;
    text-align: center;
    letter-spacing: 5px;
    background-color: black;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
  p span {
    font-size: 1.2em;
  }

  code {
    color: #bdbdbd;
    text-align: center;
    display: block;
    font-size: 16px;
    margin: 0 30px 25px;
  }
  code span {
    color: #f0c674;
  }
  code i {
    color: #b5bd68;
  }
  code em {
    color: #b294bb;
    font-style: unset;
  }
  code b {
    color: #81a2be;
    font-weight: 500;
  }

  @media screen and (max-width: 880px) {
    p {
      font-size: 14vw;
    }
  }
  button {
    width: fit-content;
    background-color: #5fb030;
    color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
    border-radius: 16px;
    border: transparent;
    padding: 6px;
    margin-top: 10px;
    display: inline-block;
  }
  button:active {
    box-shadow: none;
  }
</style>
