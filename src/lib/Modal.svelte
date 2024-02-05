<script>
    import IconClose from "../assets/IconClose.svg.svelte";
    import Button from "./Button.svelte";

    let dialog;

    export function showModal() {
        dialog.showModal();
    }

    function closeModal() {
        dialog.close();
    }
</script>

<dialog bind:this={dialog} class="card">
    <div class="close">
        <Button onClick={closeModal} alt="Close project">
            <IconClose />
        </Button>
    </div>
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
        box-shadow: 0px 2px 10px 10 px rgba(0, 0, 0, 0.5);
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.75);
    }
    .content {
        display: block;
    }

    .close {
        position: absolute;
        width: 3em;
        height: 3em;
    }
</style>
