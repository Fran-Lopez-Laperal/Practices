<script>
	export let initialCounter = 0;
	let counter = initialCounter

	function handleClick(){
		counter++
	}
</script>

<main>
	<h1>{counter}</h1>
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