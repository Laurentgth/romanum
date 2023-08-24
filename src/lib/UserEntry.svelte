<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { rejectedCharactersRegex } from '../scripts/constants'
    let val: string = ''
    const dispatch = createEventDispatcher()

    /**
     * Handles user's entry transforming it to UPPERCASE and removing unwanted characters.
     * Once that level of sanitation is done, the result is dispatched as an
     * 'entry' custom event.
     *
     * @return {undefined}
     */
    const handleInput = (): void => {
        val = val.toUpperCase().replace(rejectedCharactersRegex, '')
        dispatch('entry', val)
    }
</script>

<input
    type="text"
    name="number"
    bind:value={val}
    on:input={handleInput}
    placeholder="enter number to convert"
/>

<style>
    input {
        text-align: center;
        font-size: 1.5rem;
        height: 3rem;
        border: 2px solid transparent;
        border-radius: 0.3rem;
        background-color: #e8dcb9;
    }
    input:focus {
        border-color: black;
    }
</style>
