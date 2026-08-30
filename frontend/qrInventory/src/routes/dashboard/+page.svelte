<script>
    import Card from "$lib/components/Card.svelte";

    let numBikesDonatedToday = 54;
</script>

<h1>Dashboard</h1>
<p>Your inventory tables and data go here.</p>

<div class="flex-container">
    <Card title={"Total Bikes"} />
    <Card title={"Donated Today"} body={numBikesDonatedToday}/>
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