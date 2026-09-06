<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import TextEntry from "$lib/components/TextEntry.svelte";

    let bike = $state({
        name: "",
        style: ""
    });
</script>

<h1>Add Bike</h1>

<Card title="Bike Details">
    {#snippet content()}
    <div class="column">
        <TextEntry label="Bike Name" bind:value={bike.name} />
        <TextEntry label="Bike Style" bind:value={bike.style} />
        <p>Q3</p>
        <p>Q4</p>
    </div>
    {/snippet}

</Card>

<style>


    .column {
        color: #557da3;
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        gap: 1rem;
    }
</style>