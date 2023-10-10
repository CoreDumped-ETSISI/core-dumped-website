<script lang="ts">
  import Grid from "$lib/components/Grid.svelte";
  import PeopleCard from "$lib/components/PeopleCard.svelte";
  import Title from "$lib/components/Title.svelte";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  export let data: PageData;
</script>

<svelte:head>
  <title>Eventos</title>
  <meta
    name="description"
    content="Encuentra y filtra los eventos de la asociación Core Dumped de la ETSISI-UPM"
  />
</svelte:head>
<Title>Sobre Nosotros</Title>
<p class="about">
  Core Dumped es una asociacion de estudiantes de la ETSISI-UPM con especial
  interés en las nuevas tecnologías y tendencias. <br />
  Nos dedicamos a organizar proyectos, eventos y talleres educativos para los alumnos
  de la escuela y personas interesadas afin de complementar la formación académica.
  <br /> ¡Ven a visitarnos en la zona de asociaciones bajo la rotonda, al lado de
  la cafetería!
</p>
<Title>Junta Directiva</Title>
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
    text-align: center;
    padding: 8px;
    margin-bottom: 16px;
  }
</style>
