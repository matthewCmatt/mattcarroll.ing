<script>
  import AnchorButton from "./lib/AnchorButton.svelte";
  import InlineTransparent from "./lib/InlineTransparent.svelte";

  let github = "https://github.com/matthewCmatt";
  let linkedin = "https://www.linkedin.com/in/matthew-carroll-ab9129182/";
</script>

<main>
  <h1>
    Matthew Carroll<InlineTransparent>.ing</InlineTransparent>
  </h1>
  <p>Computer Science Undergraduate at the University of Oklahoma</p>
  <AnchorButton href={github} label="GitHub" />
  <AnchorButton href={linkedin} label="LinkedIn" />
</main>

<style>
  p {
    padding-bottom: 2em;
  }
</style>
