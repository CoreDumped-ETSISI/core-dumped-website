<!-- This page shows the project cards and allows to filter them by month, category, status and title-->
<script lang="ts">
  import { page } from "$app/stores";
  import Card from "$lib/components/Card.svelte";
  import Filters from "$lib/components/Filters.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Title from "$lib/components/Title.svelte";
  import type { PageData } from "./$types";
  interface card {
    title: string;
    description: string;
    type: string;
    date: string;
    url: string;
    _id: string;
    image: string;
    category: string;
    status: string;
  }

  export let data: PageData;
  let search_text: string = "";
  let status_filter: string = "";
  let category_filter: string = "";
  let date_filter: string = "";
  let categories: string[] = data.categories;
  let statuses: string[] = [
    "En progreso",
    "Completado",
    "Próximamente",
    "Cancelado",
  ];

  let filtered: card[];

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
  function filter(
    data: Array<card>,
    search_text: string,
    status_filter: string,
    category_filter: string,
    date_filter: string
  ): card[] {
    let array: card[] = [...data];
    if (search_text.length > 0) {
      array = array.filter((item) =>
        item.title.toLowerCase().includes(search_text.toLowerCase())
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
  }

  $: filtered = filter(
    data.events,
    search_text,
    status_filter,
    category_filter,
    date_filter
  );
</script>

<Title>Proyectos</Title>
<Filters
  bind:search_text
  bind:status_filter
  bind:category_filter
  bind:date_filter
  {categories}
  {statuses}
/>
<Grid>
  {#key filtered}
    {#each filtered as item}
      <Card
        id={item._id}
        title={item.title}
        description={item.description}
        image_src={item.image}
        date={item.date}
        category={item.category}
        status={item.status}
      />
    {/each}
  {/key}
</Grid>
