<script lang="ts">
    import Form from './lib/Form.svelte';
    import Header from './lib/Header.svelte';
    import Return from './lib/Return.svelte';
    import { processEntry } from './scripts/conversions';

    let returnValue: string;

    /**
     * Handles processing of value entered by user.
     *
     * @param event
     */
    const handleEntry = (event: CustomEvent): void => {
        returnValue = processEntry(event.detail); // event.detail contains user's input
    };
</script>

<Header />
<main>
    <Form on:entry={handleEntry} />
    <Return returnDisplay={returnValue} />
</main>

<style>
    main {
        max-width: 500px;
        margin: auto;
    }
</style>
