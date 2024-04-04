<script>
    import AnchorButton from "$lib/AnchorButton.svelte";

    export let excludeHome = false;
    let home = "/";
    let github = "https://github.com/matthewCmatt";
    let linkedin = "https://www.linkedin.com/in/matthew-carroll-ab9129182/";
</script>

<nav>
    {#if !excludeHome}
        <AnchorButton href={home} label="Home" />
    {/if}
    <AnchorButton href={github} label="GitHub" ext />
    <AnchorButton href={linkedin} label="LinkedIn" ext />
</nav>
