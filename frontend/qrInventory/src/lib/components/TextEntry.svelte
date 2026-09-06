<script lang="ts">
    let {
        label,
        value = $bindable("")
    } = $props<{
        label: string;
        value?: string;
    }>();
</script>

<div class="text-entry">
    <span>{label}</span>

    <input type="text" bind:value />
</div>

<style>
    .text-entry {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
</style>