<script lang="ts">
import Grid from '$lib/components/Grid.svelte';
import Card from '$lib/components/Card.svelte';
import { onMount } from 'svelte';
import type { GridApi } from 'ag-grid-community';

// TODO: fetch user data from backend

    let userData = $state.raw(null);
    $inspect(userData)

    onMount(async () => {
        const response = await fetch('api/users')
        if (response.ok) {
            userData = await response.json();
        }
    });

    let donorApi: GridApi | undefined = $state()
    let usersApi: GridApi | undefined = $state()
    
    // table resets
    function resetTable(tableName: string) {
        console.log(`Hello ${tableName}!`)
        console.log(userData)
        if (tableName === 'Donors') {
            donorApi?.setGridOption('rowData', structuredClone(userData.donorRows))
            donorApi?.resetColumnState();
        } else if (tableName === 'Users') {
            donorApi?.setGridOption('rowData', structuredClone(userData.usersRows))
            usersApi?.resetColumnState();
        }
    }

</script>

<h1>Users</h1>

{#if userData}
    <Card title="Donors">
        {#snippet content()}
        <Grid rowData={userData.donorRows} columnDefs={userData.donorColumns} bind:api={donorApi} />
        <button onclick={() => resetTable('Donors')}>Reset</button>
        {/snippet}
    </Card>

    <br />

    <Card title="Users">
        {#snippet content()}
        <Grid rowData={userData.usersRows} columnDefs={userData.usersColumns} bind:api={usersApi} />
        <button onclick={() => resetTable('Users')}>Reset</button>
        {/snippet}
    </Card>
{/if}