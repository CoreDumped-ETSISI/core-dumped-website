<!-- 
  @component
  # Filters
  A component for filtering the projects and events.
  It allows for filtering with month, category and status as well as text input to filter by title.
  #### The following exported variables are intended as inputs:
  - categories (String array of categories)
  - statuses (String array of statuses)
  #### The following exported variables are intended as outputs:
  - search_text (Filter by title)
  - status_filter (Filter by status)
  - category_filter (Filter by category)
  - date_filter (Filter by month)
-->

<script lang="ts">
  import Search from "$lib/components/Search.svelte";
  import Grid from "./Grid.svelte";
  export let search_text: string = "";
  export let status_filter: string;
  export let category_filter: string;
  export let date_filter: Date = new Date();
  export let categories: string[];
  export let statuses: string[];
  function resetAll() {
    date_filter = new Date();
    status_filter = "";
    category_filter = "";
  }
</script>

<div class="filters">
  <Grid width={225}>
    <Grid width={150} gap={8}>
      <input
        class="selector date_select"
        type="month"
        bind:value={date_filter}
      />
      <select class="selector" bind:value={status_filter}>
        <option value="" selected hidden>Filtra por estado</option>
        {#each statuses as status}
          <option value={status.toLocaleLowerCase()}>{status}</option>
        {/each}
      </select>
      <select class="selector" bind:value={category_filter}>
        <option value="" selected hidden>Filtra por categoría</option>
        {#each categories as category}
          <option value={category.toLocaleLowerCase()}>{category}</option>
        {/each}
      </select>
      <button on:click={resetAll}>Restablecer</button>
    </Grid>
    <Search bind:search_text />
  </Grid>
</div>

<style>
  .filters {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .selector {
    height: max-content;
    border: transparent;
    font-size: 16px;
    border-bottom: 1px solid #5fb030;
    background-color: transparent;
  }
  .selector:focus {
    outline: none;
  }
  select {
    padding-bottom: 2px;
    margin-left: 8px;
  }
  button {
    width: fit-content;
    background-color: #5fb030;
    color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
    border-radius: 16px;
    border: transparent;
    padding: 6px;
  }
  button:active {
    box-shadow: none;
  }
</style>
