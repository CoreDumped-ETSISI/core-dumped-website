<script lang="ts">
  import Filters from "$lib/components/Filters.svelte";
  import Title from "$lib/components/Title.svelte";
  let search_text: string = "";
  let status_filter: string;
  let category_filter: string;
  let date_filter: Date = new Date();
  let categories: string[] = ["Dimension", "Hackathon", "Taller", "Academy"];
  let statuses: string[] = ["En Progreso", "Finalizado", "Planeado"];
</script>

<Title>Eventos</Title>
<Filters
  {search_text}
  {status_filter}
  {category_filter}
  {date_filter}
  {categories}
  {statuses}
/>
