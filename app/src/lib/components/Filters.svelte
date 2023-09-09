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
<script context="module" lang="ts">
  import type { Card } from "../../routes/(main)/+page.server";
  /**
   * Function that checks if two dates are on the same month
   * @param d1 date 1
   * @param d2 date 2
   */
  function sameMonth(d1: string, d2: string): boolean {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth()
    );
  }
  /**
   * Function that filters a card array by title, status, category and month
   * Empty strings are considered wildcards
   * @param data Array to filter
   * @param search_text Text to search in title
   * @param status_filter Status to search
   * @param category_filter Category to search
   * @param date_filter Month and year to search
   */
  export const filter = function (
    data: Array<Card>,
    search_text: string,
    status_filter: string,
    category_filter: string,
    date_filter: string
  ): Card[] {
    let array: Card[] = [...data];
    if (search_text.length > 0) {
      array = array.filter((item) =>
        item.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            search_text
              .toLowerCase()
              .trim()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      );
    }
    if (status_filter.length > 0) {
      array = array.filter(
        (item) => item.status.toLowerCase() === status_filter.toLowerCase()
      );
    }
    if (category_filter.length > 0) {
      array = array.filter(
        (item) => item.category.toLowerCase() === category_filter.toLowerCase()
      );
    }
    if (date_filter.length > 0) {
      array = array.filter((item) => sameMonth(date_filter, item.date));
    }
    return array;
  };
</script>

<script lang="ts">
  import Search from "$lib/components/Search.svelte";
  export let search_text: string = "";
  export let status_filter: string = "";
  export let category_filter: string = "";
  export let date_filter: string = "";
  export let categories: string[];
  export let statuses: string[];
  function resetAll() {
    date_filter = "";
    status_filter = "";
    category_filter = "";
    search_text = "";
  }
</script>

<div class="filters">
  <div class="selectors">
    <input
      id="date"
      class="selector date_select"
      type="month"
      bind:value={date_filter}
    />
    <select id="status" class="selector" bind:value={status_filter}>
      <option value="" selected hidden>Filtra por estado</option>
      {#each statuses as status}
        <option value={status.toLocaleLowerCase()}>{status}</option>
      {/each}
    </select>
    <select id="category" class="selector" bind:value={category_filter}>
      <option value="" selected hidden>Filtra por categoría</option>
      {#each categories as category}
        <option value={category.toLocaleLowerCase()}>{category}</option>
      {/each}
    </select>
    <button on:click={resetAll}>Restablecer</button>
  </div>
  <Search bind:search_text />
</div>

<style>
  .filters {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .selectors {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    gap: 8px;
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
  @media screen and (max-width: 950px) {
    .filters {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
</style>
