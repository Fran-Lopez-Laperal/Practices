<script>
import { each } from "svelte/internal";


    let value = ''

    const handleInput = (e) => 
        value = e.target.value  
        $: if(value.length > 2){
            fetch(`https://www.omdbapi.com/?s=${value}&apikey=422350ff`)
            .then(res => res.json())
            .then(apiResponse => {
                console.log(apiResponse)
            })
        }
    
</script>



<input type={value} on:input={handleInput} />
