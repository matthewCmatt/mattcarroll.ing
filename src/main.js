import { SvelteComponent } from 'svelte'
import './app.css'
import './theme.css'
import App from './App.svelte'

const app = new App({
    target: document.getElementById('app'),
})

export default app
