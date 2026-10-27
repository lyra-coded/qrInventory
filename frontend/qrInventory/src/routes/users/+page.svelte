<script lang="ts">
import Grid from '$lib/components/Grid.svelte';
import Card from '$lib/components/Card.svelte';
import { mssqlToAgGrid } from '$lib/mssqlToAgGrid';
import { onMount } from 'svelte';
import { SvelteMap } from 'svelte/reactivity';
import type { GridApi } from 'ag-grid-community';
import type { GridData } from '$lib/mssqlToAgGrid';

    // user data is array of GridDatas, defined by the user type in another array
    let userTypes: Array<string> = ["donor", "users"]
    let userDataMap = new SvelteMap<string, GridData | undefined>();
    let gridApis = $state<Record<string, GridApi>>({})
    let error: string | null = $state(null);

    onMount(async () => {
        const allUserTypesAndData = await Promise.all(
            userTypes.map(async (userType: string) => {
                // fetch user data by userType from backend
                let userParams = new URLSearchParams({userType: userType})
                // console.log(`api/users?${userParams}`)

                try {
                    const response = await fetch(`api/users?${userParams}`)
                    if (response.ok) {
                        let raw = await response.json();
                        let userData: GridData = await mssqlToAgGrid(raw)
                        // return userType string, the userData, and the api to reset the table with
                        // console.log([userType, userData])
                        return [userType, userData] as const
                    } else {
                        throw new Error(`Failed to load ${userType}`)
                    }
                } catch (e) {
                    error = e instanceof Error ? e.message : "Something went wrong"
                }

            })
        )

        // console.log(allUserTypesAndData)
        for (const entry of allUserTypesAndData) {
            if (!entry) continue;
            const [type, grid] = entry;
            userDataMap.set(type, grid)
        }
        // console.log(userDataMap)
    });
    
    // table resets   
    function resetTable(userType: string) {
        if (!userDataMap) return;
        gridApis[userType].setGridOption('rowData', structuredClone(userDataMap.get(userType).rows))
        gridApis[userType].resetColumnState()
    }

</script>

<h1>Users</h1>


{#if userDataMap}
    {#each userTypes as type}
    {@const entry = userDataMap.get(type)}
    {#if entry}
        <Card title="Donors">
        {#snippet content()}            
            <Grid
                    rowData={entry.rows}
                    columnDefs={entry.cols}
                    bind:api={gridApis[type]}
                />
                <button onclick={() => resetTable(type)}>Reset</button>
                {/snippet}
        </Card>
    {/if}
{/each}
{/if}