<script lang="ts">
  export let status: string;
  const colors: Map<string, string> = new Map<string, string>();
  colors.set("Próximamente", "blue");
  colors.set("En progreso", "orange");
  colors.set("Completado", "#5fb030");
  colors.set("Cancelado", "red");
  let status_color: string = colors.get(status) || "black";
</script>

<div class="tag" style="background-color: {status_color};">
  <p>{status}</p>
</div>

<style>
  .tag {
    border-radius: 24px;
    width: max-content;
    padding: 8px;
    color: white;
    margin-top: 8px;
    border: 2px solid transparent;
  }
</style>
