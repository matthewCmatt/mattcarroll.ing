<script>
    import NewTabIcon from "./NewTabIcon.svelte";

    let dialog;

    export function showModal() {
        dialog.showModal();
    }

    function closeModal() {
        dialog.close();
    }
</script>

<dialog bind:this={dialog} class="card">
    <button on:click={closeModal}> Close </button>
    <div class="content">
        <slot />
    </div>
</dialog>

<style>
    dialog {
        position: absolute;
        left: calc(50% - 20rem);
        overflow-x: hidden;
        overflow-y: auto;

        --border-radius: 5px;
        --offset: max(1em, var(--border-radius));

        width: 800px;

        background-color: var(--color-button-bg);

        border-radius: var(--border-radius);
        border-style: solid;
        border-width: 1px;
        border-color: hwb(0 44% 56%);

        padding: var(--offset);
        margin: 1.5em;
    }

    dialog::backdrop {
        background-image: rgb(0, 0, 0);
    }

    button,
    .content {
        display: block;
    }
</style>
