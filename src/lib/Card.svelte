<script>
    import { onMount } from "svelte";
    import NewTabIcon from "./NewTabIcon.svelte";
    import Modal from "./Modal.svelte";

    export let image_src = "";
    export let image_alt = "";
    export let title = "Card Title";
    export let description = "Description description description.";

    let showModal;
</script>

<button on:click={showModal} class="card">
    <NewTabIcon class="icon" />
    <img class="cover" src={image_src} alt={image_alt} />
    <h2>{title}</h2>
</button>

<Modal bind:showModal>
    <img class="cover" src={image_src} alt={image_alt} />
    <h2>{title}</h2>
    {description}
</Modal>

<style>
    .card {
        --border-radius: 5px;
        --offset: max(1em, var(--border-radius));

        width: 40em;

        background-color: var(--color-button-bg);

        border-radius: var(--border-radius);
        border-style: solid;
        border-width: 1px;
        border-color: hwb(0 44% 56%);

        overflow: hidden;

        padding: var(--offset);
        margin: 1.5em;
    }

    button.card {
        display: block;
    }

    .cover {
        width: calc(100% + 2 * var(--offset));
        margin-left: calc(-1 * var(--offset));
        margin-top: calc(-1 * var(--offset));
        aspect-ratio: 3 / 2;
    }

    .icon {
        position: float;
        z-index: 1;
        right: 0;
        top: 0;
    }
</style>
