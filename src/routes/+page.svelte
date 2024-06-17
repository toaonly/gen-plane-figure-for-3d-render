<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Width</th>
        <th>Height</th>
        <th>Depth</th>
        <th>X</th>
        <th>Y</th>
        <th>Z</th>
      </tr>
    </thead>
    <tbody>
      {#each data.data as row (row.id)}
        <tr>
          <td>
            <a href={`/${row.id}`}>{row.id}</a>
          </td>
          <td>{row.name}</td>
          <td>{row.width}</td>
          <td>{row.height}</td>
          <td>{row.depth}</td>
          <td>{row.x}</td>
          <td>{row.y}</td>
          <td>{row.z}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
