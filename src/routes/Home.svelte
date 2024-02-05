<script>
    import InlineTransparent from "/src/lib/InlineTransparent.svelte";
    import Nav from "/src/lib/Nav.svelte";
</script>

<main>
    <div id="heading">
        <h1>
            Matt Carroll<InlineTransparent>.ing</InlineTransparent>
        </h1>
        <p>Computer Science Undergraduate at the University of Oklahoma</p>
    </div>
    <Nav excludeHome />
</main>

<style>
    p {
        margin-bottom: 2em;
    }
</style>
