<!--
  @component
  # Search Bar
  Search bar that exports the inputed text in the variable `search_text`.
-->
<script lang="ts">
  export let search_text = "";
</script>

<div class="search-box">
  <button class="btn-search"><i class="fas fa-search" /></button>
  <input
    type="text"
    class="input-search"
    placeholder="Escribe para buscar..."
    bind:value={search_text}
  />
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
    margin-bottom: 8px;
  }
  .input-search {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: #fff;
    padding-right: 40px;
    color: #5fb030;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
  }
  .input-search::placeholder {
    color: #5fb030;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #5fb030;
    background-color: transparent;
    pointer-events: painted;
    box-shadow: none;
  }
  .btn-search:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid #5fb030;
    color: #5fb030;
    box-shadow: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid #5fb030;
    color: #5fb030;
    box-shadow: none;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
</style>
