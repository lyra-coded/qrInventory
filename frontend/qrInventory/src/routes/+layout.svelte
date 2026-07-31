<script lang="ts">
  // Import the component using the $lib alias
  import Navbar from '$lib/components/Navbar.svelte';
  import { type Snippet } from 'svelte';

  let { children }: { children?: Snippet } = $props();
</script>

<div class="app-container">
  <!-- Render the component here -->
  <Navbar />
  
  <main class="content">
  {@render children()}
  </main>
</div>

<style>
  /* A simple layout to put the sidebar on the left and content on the right */
 :global(body) {
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
  }
  
  .app-container {
    display: flex;
    width: 100vw;
    max-width: 100%;
    margin: 0;
  }

  .content {
    flex: 1;
    flex-grow: 1;
    padding: 24px 32px;
    height: 100vh; 
    overflow-y: auto;
  }

  /* .app-container {
    display: flex;
    min-height: 100vh;
    background-color: #f4f7f9;
  } */
</style>