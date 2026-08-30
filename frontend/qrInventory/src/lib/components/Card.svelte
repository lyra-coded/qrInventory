<script lang="ts">
    let { title, body = "????"} = $props();
</script>

<div class="card">
    <h3>{title}</h3>
    <strong>{body}</strong>
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
        color: #557da3;
        font-size: 17px;
        font-weight: 400;
    }
</style>