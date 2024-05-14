<template>
  <main>
    <div>
      <SortBy @sort-by-changed="sortBuildings" />
      <div class="buildinglist-container">
          <BuildingOverview v-for="(building, index) in buildings" :key="index" :building="building"/>
      </div>
    </div>
  </main>
</template>

<script setup>
    import BuildingOverview from '../components/BuildingOverview.vue'
    import SortBy from '../components/SortBy.vue'
    import { ref, onMounted } from 'vue'

    const buildings = ref(null)
    
    onMounted(() => {
      fetchBuildings()
    })

    const fetchBuildings = async () => {
      fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => {
        buildings.value = data.data
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
    }

    const sortBuildings = (sortByOption) => {
      if (sortByOption === 'carbon_emission_per_square_meter') {
        buildings.value.sort((a, b) => ((a.carbon_emission / a.surface).toFixed(1) * 10) - ((b.carbon_emission / b.surface).toFixed(1) * 10))
      } else if (sortByOption === 'surface') {
        buildings.value.sort((a, b) => a.surface - b.surface)
      } else if (sortByOption === 'name') {
        buildings.value.sort((a, b) => a.name.localeCompare(b.name))
  }
} 
</script>

<style scoped lang="scss">
 @import url('@/assets/main.css');
  main {
    width: 80vw;
    margin: auto;
    div {
      background-color: var(--color-background-sec);
      border-radius: var(--border-radius);
      .buildinglist-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
</style>