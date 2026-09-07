<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import {bike} from "$lib/bike.svelte";

    $inspect(bike)

    function capitalizeFirstLetter(val: string) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }
 
</script>

<h1>Add Bicycle</h1>

<Card title="Bicycle Details">
    {#snippet content()}

    <div class="form entry">
        {#each Object.entries(bike) as [key, _]}
            <h4>{capitalizeFirstLetter(key)}</h4><input type="text" bind:value={bike[key]} />
        {/each}
    </div>

    <button><span>Submit</span></button>

    {/snippet}
</Card>

<style>

    .form.entry {
        color: #557da3;
        width: 100%;
    }

    h4 {
        margin-bottom: .5rem;
    }

    input {
        width: 50%;
        border: 1px solid rgb(231, 231, 231);
        border-radius: 4px;
        box-shadow: 2px 2px 7px 0 rgb(0, 0, 0, 0.2);
        color: dimgray;
        outline: none;
    }

    button {
        display: inline-block;
        border-radius: 4px;
        background-color: #1a1a1a;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 17px;
        padding: 8px;
        width: 130px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 1rem;
    }

    button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    button span:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -15px;
        transition: 0.5s;
    }

    button:hover span {
        padding-right: 15px;
    }

    button:hover span:after {
        opacity: 1;
        right: 0;
    }
</style>