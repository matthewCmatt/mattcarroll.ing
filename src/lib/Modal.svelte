<script>
    import IconClose from "../assets/IconClose.svg.svelte";

    let dialog;

    export function showModal() {
        dialog.showModal();
    }

    function closeModal() {
        dialog.close();
    }
</script>

<dialog bind:this={dialog} class="card">
    <button on:click={closeModal} alt="Close project">
        <IconClose />
    </button>
    <div class="content">
        <slot />
    </div>
</dialog>

<style>
    dialog {
        position: absolute;
        margin: 6rem auto;
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
        box-shadow: 0px 2px 10px 10px rgba(0, 0, 0, 0.5);
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.75);
    }

    button {
        all: unset;
        padding: auto;
        position: absolute;
        background-color: black;
        font-size: 1.5rem;
        right: 1.5rem;
        top: 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
        transition: background-color 0.1s;
    }

    button:hover {
        background-color: gray;
    }

    .content {
        display: block;
    }
</style>
