<script>
  import IconExternal from "../assets/IconExternal.svg.svelte";

  export let href = "";
  export let label;
  export let ext = false;
</script>

<a {href} class="hoverable">
  {label}
  {#if ext}
    <IconExternal />
  {/if}
</a>

<style>
  a {
    display: inline-block;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    margin: 0.4em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--color-button-bg);
    color: var(--color-a);
  }
</style>
