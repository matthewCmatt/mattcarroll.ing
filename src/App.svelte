<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./routes/Home.svelte";
    import Projects from "./routes/Projects.svelte";

    export let url = "";
</script>

<Router {url}>
    <Route><Home /></Route>
    <Route path="/projects"><Projects /></Route>
</Router>
