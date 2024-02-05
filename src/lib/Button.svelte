<script>
    import IconExternal from "../assets/IconExternal.svg.svelte";

    export let onClick;
    export let alt;
</script>

<button on:click={onClick} {alt} class="hoverable">
    <slot />
</button>

<style>
    button {
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        font-weight: 500;
        font-family: inherit;
        background-color: var(--color-button-bg);
        color: var(--color-a);
    }

    slot {
        margin: auto;
    }
</style>
