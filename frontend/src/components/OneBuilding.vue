<template>
    <main>
        <section class="building-overview-card"v-if="building">
                <h2>{{ building.name }}</h2>
            <ul>
                <li class="head-list">Address</li>
                <li>{{ building.address }}</li>
                <li>{{ building.city }}</li>
                <li>{{ building.postcode }}</li>
            </ul>
            <ul>
                <li>Surface (m2)</li>
                <li>{{ building.surface }}</li>
            </ul>
            <ul>
                <li>Carbon emission (kg eq CO2)</li>
                <li>{{ building.carbon_emission }}</li>
            </ul>
            <ul>
                <li>Carbon emission per square meter (kg eq CO2/m2)</li>
                <li> {{ carbonEmissionPerSquareMeter }}</li>
            </ul> 
        
            <button @click="goBack" class="go-back"> 
                <img src="@/assets/icons/left-arrow.svg" alt="Buidlings Details" class="filter" />
                <span>back</span>
            </button>
        </section>

        <section v-else>
                <h2>Chargement en cours...</h2>
        </section>
    </main>
</template>

<script setup>
    import { useRoute, useRouter  } from 'vue-router'
    import { ref, onMounted } from 'vue'

    const route = useRoute()
    const router = useRouter()
    const buildingId = parseInt(route.params.id, 10)
    const building = ref(null)
    const carbonEmissionPerSquareMeter = ref(null)

    const goBack = () => {
        router.push("/#/");
    };

    onMounted(() => {
      fetch(`http://localhost:3000`)
        .then(response => response.json())
        .then(data => {
          const buildings = data.data
          const selectedBuilding = buildings.find(building => building.id === buildingId)
            building.value = selectedBuilding
            carbonEmissionPerSquareMeter.value = (selectedBuilding.carbon_emission / selectedBuilding.surface).toFixed(1) * 10
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    });

</script>


<style scoped lang="scss"> 
     @import url('@/assets/main.css');
     section {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 600px;
        height: 700px;
        background-color: var(--color-background-sec);
        padding: 40px;
        border-radius: var(--border-radius);
        h2 {
            font-weight: bold;
        }
        ul {
        list-style: none;
        padding: 5px;
        padding-top: 20px;
            li {
                font-size: 20px;
            }
            :first-child {
                font-weight: bold;
            }
        }
        .go-back {
            border: none;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100px;
            position: relative;
            cursor: pointer;
            position: relative;
            top: 70px;
            img {
                width: 30px;
            }
            span {
                font-size: 20px;
            }
        }  
     }
</style>