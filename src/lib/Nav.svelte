<script>
    import { links } from "svelte-routing";
    import AnchorButton from "/src/lib/AnchorButton.svelte";

    export let excludeHome = false;
    let home = "/";
    let projects = "/projects";
    let github = "https://github.com/matthewCmatt";
    let linkedin = "https://www.linkedin.com/in/matthew-carroll-ab9129182/";
</script>

<nav use:links>
    {#if !excludeHome}
        <AnchorButton href={home} label="Home" />
    {/if}
    <AnchorButton href={projects} label="Projects" />
    <AnchorButton href={github} label="GitHub" ext />
    <AnchorButton href={linkedin} label="LinkedIn" ext />
</nav>
