<script lang="ts">
    let { title, body="", content} = $props();
</script>

<div class="card">
    {#if title}
        <h2 class="card-title">{title}</h2>
    {/if}
    {#if body}
        <strong>{body}</strong>
    {/if}
    {#if content}
        {@render content()}
    {/if}
</div>

<style>
    .card {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 18px;
        box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 3px 8px rgba(0, 0, 0, 0.08);
        padding: 20px 24px;
    }

    .card-title {
        /* color: #557da3;
        font-weight: 400; */
    }
</style>