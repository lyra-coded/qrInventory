<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import TitleRow from "$lib/components/TitleRow.svelte";

    let numBikesDonatedToday = 54;

    let data = $props();
    $inspect(data)
</script>

<TitleRow title="Dashboard" />
<!-- <p>Your inventory tables and data go here.</p> -->

<div class="flex-container">
    <Card title={"Total Bikes"} />
    <Card title={"Donated Today"} body={numBikesDonatedToday}/>
    <!-- <Card title={"Where am I?"} body={data.data.location}/> -->
</div>

<style>
    .flex-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }
</style>