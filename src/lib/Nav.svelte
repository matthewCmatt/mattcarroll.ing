<script>
    import { Link } from "svelte-routing";
    import { links } from "svelte-routing";
    import AnchorButton from "/src/lib/AnchorButton.svelte";

    let github = "https://github.com/matthewCmatt";
    let linkedin = "https://www.linkedin.com/in/matthew-carroll-ab9129182/";

    export let excludeHome = false;
</script>

<nav use:links>
    {#if !excludeHome}
        <AnchorButton href="/" label="Home" />
    {/if}
    <AnchorButton href="/projects" label="Projects" />
    <AnchorButton href={github} label="GitHub" />
    <AnchorButton href={linkedin} label="LinkedIn" />
</nav>
