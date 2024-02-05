<script>
  import IconExternal from "../assets/IconExternal.svg.svelte";

  export let href = "";
  export let label;
  export let ext = false;
</script>

<a {href}>
  {label}
  {#if ext}
    <IconExternal color="var(--color-a)" />
  {/if}
</a>

<style>
  a {
    display: inline-block;
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.6em 1.2em;
    margin: 0.4em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--color-button-bg);
    color: var(--color-a);
    cursor: pointer;
    transition:
      border-color 0.25s,
      color 0.25s;
  }
  a:hover {
    border-color: var(--color-button-border);
    color: var(--color-a-hover);
  }
  a:focus,
  a:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
