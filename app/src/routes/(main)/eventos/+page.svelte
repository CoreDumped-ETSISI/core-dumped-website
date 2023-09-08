<!-- This page shows the events cards and allows to filter them by month, category, status and title-->
<script lang="ts">
  import CardComponent from "$lib/components/CardComponent.svelte";
  import Filters from "$lib/components/Filters.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Title from "$lib/components/Title.svelte";
  import type { PageData } from "./$types";
  import type { Card } from "../+page.server";
  import { filter } from "$lib/components/Filters.svelte";

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

  let filtered: Card[];

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
      <CardComponent
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
