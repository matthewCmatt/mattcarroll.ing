<div>
    <slot />
</div>

<style>
    div {
        position: absolute;
        display: inline;
        opacity: 50%;
        background: -webkit-linear-gradient(
            var(--color-a),
            var(--color-a-hover)
        );
        background-clip: text;
        color: rgba(0, 0, 0, 0);
        user-select: none;
    }

    @media (prefers-color-scheme: light) {
        div {
            opacity: 70%;
        }
    }
</style>
