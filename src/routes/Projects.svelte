<script>
    import AnchorButton from "/src/lib/AnchorButton.svelte";
    import Nav from "/src/lib/Nav.svelte";
    import Card from "/src/lib/Card.svelte";

    import teardrop from "/src/assets/teardrop.png";
    import plentyophish from "/src/assets/plentyophish.png";
    import internetofpings from "/src/assets/internetofpings.png";
    import airou from "/src/assets/airou.png";
</script>

<main>
    <Nav />

    <Card image_src={teardrop}>
        <svelte:fragment slot="title">Python: Teardrop Helix</svelte:fragment>
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

    <Card image_src={plentyophish}>
        <svelte:fragment slot="title">
            Hacklahoma 2022: PlentyO'Phish
        </svelte:fragment>
        <p>
            Winning the 1st place prize for Hacklahoma 2022, our project, Plenty
            o' Phish, was a game centered around writing phishing emails.
        </p>
        <AnchorButton
            href="https://plentyophish.tauser.us/"
            label="Hosted Site"
            ext
        />
        <AnchorButton
            href="https://devpost.com/software/plenty-o-phish"
            label="DevPost"
            ext
        />
    </Card>

    <Card image_src={airou}>
        <svelte:fragment slot="title">AIROU Lab Site</svelte:fragment>
        <p>
            I redesigned the site for my robotics lab at the University of
            Oklahoma from scratch using Eleventy SSG, Nunjucks templating, and
            vanilla CSS.
        </p>
        <AnchorButton href="https://ou.edu/airou" label="Hosted Site" ext />
        <AnchorButton
            href="https://github.com/airou-lab/website"
            label="Source Code"
            ext
        />
    </Card>

    <Card image_src={internetofpings}>
        <svelte:fragment slot="title">
            Hacklahoma 2024: Internet of Pings
        </svelte:fragment>

        <p>
            For Hacklahoma 2024, I worked to create a browser-based network
            simulator and learning tool with the goal of teaching the OSI model.
        </p>
        <AnchorButton
            href="https://internetofpings.study/"
            label="Hosted Site"
            ext
        />
        <AnchorButton
            href="https://devpost.com/software/internet-of-pings"
            label="DevPost"
            ext
        />
    </Card>

    <AnchorButton
        href="https://github.com/matthewCmatt"
        label="View more on my GitHub"
        ext="True"
    ></AnchorButton>
</main>
