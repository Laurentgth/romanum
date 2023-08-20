<script>
    import Form from './lib/Form.svelte'
    import Header from './lib/Header.svelte'
    import Return from './lib/Return.svelte'
    import { processEntry } from './scripts/conversions'

    let returnValue

    /**
     * Handles the value entered by user to process it in the conversion.
     *
     * @param event
     */
    const handleEntry = event => {
        returnValue = processEntry(event.detail) // event.detail contains user's input
    }
</script>

<main class="main">
    <Header />
    <Form on:entry={handleEntry} />
    <Return returnDisplay={returnValue} />
</main>

<style>
    .main {
        text-align: center;
    }
</style>
