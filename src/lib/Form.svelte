<script>
    import UserEntry from './UserEntry.svelte'
</script>

<form action="" class="form" id="form">
    <UserEntry on:entry />
</form>

<style>
    .form {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }
</style>
