<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="page">
  <div class="container">
    <article class="prose prose-slate">
      <div class="text-3xl">Plane Figure</div>

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
            </tr>
          </thead>
          <tbody>
            {#each data.data as row (row.id)}
              <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.width}</td>
                <td>{row.height}</td>
                <td>{row.depth}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </article>
  </div>
</div>
