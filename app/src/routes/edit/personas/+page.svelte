<!-- This page shows the project cards and allows to filter them by month, category, status and title-->
<script lang="ts">
  import Grid from "$lib/components/Grid.svelte";
  import type { PageData } from "./$types";
  import PeopleCard from "$lib/components/PeopleCard.svelte";

  export let data: PageData;
</script>

<Grid>
  {#each data.data as item}
    <div class="edit">
      <PeopleCard
        name={item.name}
        appointment={item.appointment}
        photo={item.image}
        socials={new Map([
          ["discord", item.discord],
          ["email", item.email],
          ["instagram", item.instagram],
          ["telegram", item.telegram],
          ["github", item.github],
          ["linkedin", item.linkedin],
        ])}
      />
      <div class="button">
        <a href="/edit/personas/{item._id}"
          ><i
            class="fa-solid fa-pen-to-square fa-2xl"
            style="color: #ffffff;"
          /></a
        >
      </div>
    </div>
  {/each}
</Grid>

<style>
  .edit {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
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
