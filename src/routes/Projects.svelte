<script>
    import { Link } from "svelte-routing";
    import AnchorButton from "/src/lib/AnchorButton.svelte";
    import Nav from "/src/lib/Nav.svelte";
    import Card from "/src/lib/Card.svelte";

    import teardrop from "/src/assets/teardrop.png";
</script>

<Nav />

<Card image_src={teardrop} title="Python: Teardrop Helix">
    <p>
        In collaboration with Stan Carroll at Beyond Metal, I wrote a small
        script to generate some composite curves, spiralling around a
        teardrop-type shape made up of a sphere with a cone on top.
    </p>
    <AnchorButton
        href="https://github.com/matthewCmatt/teardrop-helix"
        label="Source Code"
        ext
    />
</Card>

<Card
    title="View more on my GitHub..."
    link="https://github.com/matthewCmatt"
/>
