<!-- This page shows the project cards and allows to filter them by month, category, status and title-->
<script lang="ts">
  import Filters from "$lib/components/Filters.svelte";
  import Grid from "$lib/components/Grid.svelte";
  import Title from "$lib/components/Title.svelte";
  let search_text: string = "";
  let status_filter: string;
  let category_filter: string;
  let date_filter: Date = new Date();
  let categories: string[] = ["Mantenimiento", "Web", "Taller", "Móvil"];
  let statuses: string[] = ["En Progreso", "Finalizado", "Cancelado"];
</script>

<Title>Proyectos</Title>
<Filters
  {search_text}
  {status_filter}
  {category_filter}
  {date_filter}
  {categories}
  {statuses}
/>
<Grid />
