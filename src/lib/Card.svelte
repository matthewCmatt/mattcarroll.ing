<script>
    import Modal from "./Modal.svelte";
    import { navigate } from "svelte-routing";

    export let image_src = "";
    export let image_alt = "";
    export let title = "Card Title";
    export let link = false;

    function navigateTo() {
        navigate(link);
    }
    let showModal;
    $: onClick = link ? navigateTo : showModal;
</script>

<button on:click={onClick} class="card hoverable">
    {#if image_src}
        <img class="cover" src={image_src} alt={image_alt} />
    {/if}
    <h2>
        {title}
    </h2>
</button>

<Modal bind:showModal>
    <img class="cover" src={image_src} alt={image_alt} />
    <h2>{title}</h2>
    <slot />
</Modal>

<style>
    .card {
        --border-radius: 5px;
        --offset: max(1em, var(--border-radius));

        width: 50em;

        background-color: var(--color-button-bg);
        border-radius: var(--border-radius);
        font-family: inherit;

        overflow: hidden;

        padding: var(--offset);
        margin: 1.5em;

        transition: 0.25s;
    }

    .card:hover {
        box-shadow: 0px 2px 10px 10px rgba(0, 0, 0, 0.2);
    }

    button.card {
        display: block;
    }

    .cover {
        width: calc(100% + 2 * var(--offset));
        margin-left: calc(-1 * var(--offset));
        margin-top: calc(-1 * var(--offset));
        object-fit: cover;
        aspect-ratio: 3 / 2;
    }
</style>
