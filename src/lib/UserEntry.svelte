<script>
    import { createEventDispatcher } from 'svelte'
    import { rejectedCharactersRegex } from '../scripts/constants'
    let val = ''
    const dispatch = createEventDispatcher()

    /**
     * Handles user's entry transforming it to UPPERCASE and removing unwanted characters.
     * Once that level of sanitation is done, the result is dispatched as an
     * 'entry' custom event.
     *
     * @return {undefined}
     */
    const handleInput = () => {
        val = val.toUpperCase().replace(rejectedCharactersRegex, '')
        dispatch('entry', val)
    }
</script>

<input
    type="text"
    name="number"
    class="number"
    bind:value={val}
    on:input={handleInput}
    placeholder="number to convert"
/>

<style>
    .number {
        text-align: center;
        font-size: 1.5rem;
        height: 3rem;
        border: 2px solid transparent;
        background-color: #e8dcb9;
    }
    .number:focus {
        border-color: black;
    }
</style>
