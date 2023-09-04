<!-- This page shows the project cards and allows to filter them by month, category, status and title-->
<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Filters from "$lib/components/Filters.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Title from "$lib/components/Title.svelte";
  import type { PageData } from "./$types";
  import type { card } from "../../(main)/+page";
  import { filter } from "$lib/components/Filters.svelte";

  export let data: PageData;
  let search_text: string = "";
  let status_filter: string = "";
  let category_filter: string = "";
  let date_filter: string = "";
  let type_filter: string = "";
  let categories: string[];
  let statuses: string[] = [
    "En progreso",
    "Completado",
    "Próximamente",
    "Cancelado",
  ];

  let filtered_type: card[];
  let filtered: card[];
  $: if (type_filter === "Evento") {
    filtered_type = data.cards.filter(
      (item) => item.type.trim().toLowerCase() === "evento"
    );
    categories = [...new Set<string>([...data.eventCategories])];
  } else if (type_filter === "Proyecto") {
    filtered_type = data.cards.filter(
      (item) => item.type.trim().toLowerCase() === "proyecto"
    );
    categories = [...new Set<string>([...data.projectCategories])];
  } else {
    filtered_type = [...data.cards];
    categories = [
      ...new Set<string>([...data.eventCategories, ...data.projectCategories]),
    ];
  }

  $: filtered = filter(
    filtered_type,
    search_text,
    status_filter,
    category_filter,
    date_filter
  );
</script>

<label for="type">Tipo:</label>
<select class="selector" name="type" id="type" bind:value={type_filter}>
  <option value="">Todos</option>
  <option value="Proyecto">Proyectos</option>
  <option value="Evento">Eventos</option>
</select>
{#key categories}
  <Filters
    bind:search_text
    bind:status_filter
    bind:category_filter
    bind:date_filter
    {categories}
    {statuses}
  />
{/key}
<Grid>
  {#key filtered}
    {#each filtered as item}
      <div class="edit">
        <Card
          id={item._id}
          title={item.title}
          description={item.description}
          image_src={item.image}
          date={item.date}
          category={item.category}
          status={item.status}
        />
        <div class="button">
          <a href="/edit/{item._id}"
            ><i
              class="fa-solid fa-pen-to-square fa-2xl"
              style="color: #ffffff;"
            /></a
          >
        </div>
      </div>
    {/each}
  {/key}
</Grid>
<a href="/edit/add" class="floatingActionButton"
  ><i class="fa-solid fa-plus fa-2xl" /></a
>

<style>
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
  .edit {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .floatingActionButton {
    all: unset;
    cursor: pointer;
    position: fixed;
    right: 0;
    bottom: 0;
    margin-bottom: 15vh;
    margin-right: 5vh;
    background-color: #5fb030;
    color: white;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
  }
  .floatingActionButton:active {
    box-shadow: none;
  }
  .button {
    all: unset;
    background-color: #5fb030;
    color: white;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.205);
  }
</style>
