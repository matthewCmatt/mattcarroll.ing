<div><slot /></div>

<style>
    div {
        position: absolute;
        display: inline;
        opacity: 50%;
        background: -webkit-linear-gradient(
            var(--color-a),
            var(--color-a-hover)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (prefers-color-scheme: light) {
        div {
            opacity: 70%;
        }
    }
</style>
