<script>
  export let href = "";
  export let label;
</script>

<a {href}>
  {label}
</a>

<style>
  a {
    border-radius: 8px;
    border: 3px solid transparent;
    padding: 0.6em 1.2em;
    margin: 0 0.4em;
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
