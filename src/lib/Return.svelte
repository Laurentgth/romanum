<script lang="ts">
    export let returnDisplay: string = '';
</script>

<p class="return-field">{returnDisplay || '•'}</p>

<style>
    p {
        color: #3f2703;
        font-size: 3rem;
        text-align: center;
    }
</style>
