<script>
    export let initialCounter = 0;
    let counter = initialCounter;
    export let maxCounter = 9;

    function handleClick() {
        counter++;
    }

    //esta sentencia es una declaración reactiva, va ejecutarse cada vez que cambie el valor y
    //que se vuelva a evaliar
    $: issEvenOrOdd = counter % 2 === 0 ? "Is Even" : "Is Odd";
    $: if (counter > maxCounter) {
        counter = maxCounter;
    }
</script>

<main>
    <h1>{counter}</h1>
    <span>{issEvenOrOdd}</span>
    <button on:click={handleClick}>Cambiar nombre</button>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
