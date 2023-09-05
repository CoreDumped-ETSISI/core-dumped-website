<script lang="ts">
  import Grid from "$lib/components/Grid.svelte";
  import PeopleCard from "$lib/components/PeopleCard.svelte";
  import Title from "$lib/components/Title.svelte";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  export let data: PageData;
</script>

<Title>Sobre Nosotros</Title>
<p class="about">
  Core Dumped es una asociacion de estudiantes de la ETSISI-UPM. <br />
  Nos dedicamos a organizar proyectos, eventos y talleres educativos para nuestra
  escuela. <br /> ¡Ven a visitarnos en la zona de asociaciones bajo al rotonda, al
  lado de la cafetería!
</p>
<Title>Directiva</Title>
<Grid width={225}>
  {#each data.people as item}
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
  {/each}
</Grid>

<style>
  .about {
    text-align: left;
    padding: 8px;
    margin-bottom: 16px;
  }
</style>
