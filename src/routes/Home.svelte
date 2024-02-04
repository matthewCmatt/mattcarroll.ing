<script>
    import { Link } from "svelte-routing";
    import AnchorButton from "/src/lib/AnchorButton.svelte";
    import InlineTransparent from "/src/lib/InlineTransparent.svelte";

    let github = "https://github.com/matthewCmatt";
    let linkedin = "https://www.linkedin.com/in/matthew-carroll-ab9129182/";
</script>

<main>
    <div id="heading">
        <h1>
            Matt Carroll<InlineTransparent>.ing</InlineTransparent>
        </h1>
        <p>Computer Science Undergraduate at the University of Oklahoma</p>
    </div>
    <div id="buttons">
        <Link to="/projects">
            <AnchorButton href="/projects" label="Projects" />
        </Link>
        <AnchorButton href={github} label="GitHub" />
        <AnchorButton href={linkedin} label="LinkedIn" />
    </div>
</main>

<style>
    p {
        margin-bottom: 2em;
    }
</style>
