<template>
    <div class="sortby-container">
        <label>
            <span>Sort by</span>
            <select @change="handleSortBy" selected="">
                <option value="" selected disabled hidden>Choose here</option>
                <option value="name">name</option>
                <option value="surface">m2</option>
                <option value="carbon_emission_per_square_meter">kg eq. CO2 / m2</option>
            </select>
        </label>
    </div>
</template>

<script setup>
    import { defineEmits } from 'vue';

    const emitsSortBy = defineEmits();

    const handleSortBy = (event) => {
        emitsSortBy('sort-by-changed', event.target.value);
    }
</script>

<style scoped  lang="scss">
.sortby-container {
    padding: 20px;
    label {   
        width: 150px;
        display: flex;
        flex-direction: column;
        position: relative;
        top: 15px;
        span {
            width: 80px;
            margin: auto;
            background-color: white;
            position: relative;
            z-index: 5 !important;
            top: 15px;
            left: 20px;
            width: 150px;
            color: var(--color-text-ter);
            border-radius: var(--border-radius);
            padding: 5px;
        }
        select {
            border: none;
            width: 350px;
            cursor: pointer;
            padding: 20px;
            border-radius: var(--border-radius);
            background-color: var(--color-background-prim);
        }
        select, 
        option,
        span {
            font-size: 20px;

        }
    }
}
</style>