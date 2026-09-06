<script lang="ts">
    let {title} = $props();
</script>

<div class="top-bar">
  <h1>{title}</h1>
  <a href="/addBike">+ Add Bike</a>
</div>

<style>
.top-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
  }

  a {
     background-color: #ef4444;
     border: none;
     color: #ffffff;
     font-weight: bold;
     padding: 10px 20px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     margin: 4px 2px;
     cursor: pointer;
     border-radius: 16px;
  }

  a:hover {
    background-color: #b33737;
  }

</style>