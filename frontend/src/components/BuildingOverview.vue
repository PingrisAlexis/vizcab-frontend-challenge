<template>
    <section class="building-overview-card">
        <h2>{{building.name}}</h2>
        <div class="info-card">
            <span>{{building.address}}</span>
            <span>{{building.city}}</span>
        </div>
        <div class="details-button">
            <RouterLink :to="{ name: 'OneBuilding', params: { id: building.id }, replace: true  }">
                <img src="@/assets/icons/eye-detail.svg" alt="Buidlings Details" class="filter" />
                <span>DETAILS</span>
            </RouterLink>
        </div>              
    </section>
</template>

<script setup>
    import { defineProps } from 'vue'
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        building: Object
    })

</script>

<style scoped lang="scss">
    @import url('@/assets/main.css');
    .building-overview-card {
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 200px;
        background-color: var(--color-background-ter);
        padding: 15px;
        margin: 20px;
        h2 {
            align-self: flex-start;
            display: inline-block;
            background-color: var(--color-background-prim);
            padding: 0.3rem 0.5rem;
            font-size: 20px; 
            max-width: 320px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .info-card {
            padding-top: 20px;
        }
        div {
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            font-size: 16px; 
        }
        .details-button {
            align-self: flex-end;
            justify-content: center;
            align-items: space-around;
            position: relative;
            bottom: -25px;
            background-color: var(--color-btn-prim);
            color: white;
            font-size: 14px; 
            cursor: pointer;
            width: 100px;
            height: 35px;
            a {
                display: flex;
                justify-content: space-around;
                align-items: center;
                text-decoration: none !important;
                color: white;
            }
            .filter {
            filter: invert(100%) hue-rotate(180deg);
                background-color: transparent;
                width: 20px;
            } 
        }
    }
    .building-overview-card,
    h2,
    .details-button {
        border-radius: var(--border-radius);
    }
</style>