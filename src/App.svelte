<script>
  import AnchorButton from "./lib/AnchorButton.svelte";

  let github = "https://github.com/matthewCmatt";
  let linkedin = "https://www.linkedin.com/in/matthew-carroll-ab9129182/";
  let email = "matthewCmatt@gmail.com";
</script>

<main>
  <h1>Matthew Carroll</h1>
  <p>Computer Science Undergraduate at the University of Oklahoma</p>
  <AnchorButton href={github} label="GitHub" />
  <AnchorButton href={linkedin} label="LinkedIn" />
</main>

<style>
  p {
    padding-bottom: 2em;
  }
</style>
