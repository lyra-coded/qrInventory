<script lang="ts">
import Grid from '$lib/components/Grid.svelte';
import Card from '$lib/components/Card.svelte';
import { mssqlToAgGrid } from '$lib/mssqlToAgGrid';
import { onMount } from 'svelte';
import type { GridApi } from 'ag-grid-community';
import type { GridData } from '$lib/mssqlToAgGrid';

    // user data is array of GridDatas, defined by the user type in another array
    let userTypes: Array<string> = ["donor", "users"]
    let userData = $state.raw<GridData | null>(null);
    let donorColumns: any;
    let donorRows: any;
    $inspect(userData)

    onMount(async () => {
        // for now, return users of all types at api/users
        // if we gain one more type of user, add url parameter for the types
        const response = await fetch('api/users')
        if (response.ok) {
            let raw = await response.json();
            userData = await mssqlToAgGrid(raw)
            console.log(userData)
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
        <Grid rowData={userData.rows} columnDefs={userData.cols} bind:api={donorApi} />
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