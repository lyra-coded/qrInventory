<script lang="ts">
    import { onMount } from 'svelte';
    import {
        AllCommunityModule,
        createGrid,
        ModuleRegistry,
        ClientSideRowModelModule,
        type GridOptions,
        themeQuartz,
        colorSchemeLightWarm
    } from 'ag-grid-community';

    let {
        columnDefs,
        rowData,
    }: {
        columnDefs: Array<any>;
        rowData: Array<any>;
    } = $props();

    // Register AG Grid Modules as Community
    // Maybe change to enterprise if organization is willing to pay...
    ModuleRegistry.registerModules([AllCommunityModule]);

    // Create a custom dark theme using Theming API
    const darkTheme = themeQuartz.withPart(colorSchemeLightWarm).withParams({
        // backgroundColor: '#212121',
        // foregroundColor: '#ffffff',
        // headerBackgroundColor: '#37474f',
        // headerTextColor: '#cfd8dc',
        // oddRowBackgroundColor: '#263238'
    });

    let gridDiv: HTMLDivElement;

    onMount(() => {
        const gridOptions: GridOptions<any> = {
            theme: darkTheme, // Apply custom dark theme
            columnDefs,
            rowData,
            defaultColDef: {
                sortable: true,
                filter: true
            }
        };

        if (gridDiv) {
            createGrid(gridDiv, gridOptions); // Create the grid with custom options
        }
    });
</script>

<!-- Grid Container -->
<div bind:this={gridDiv} style="height: 400px; width: 100%;"></div>