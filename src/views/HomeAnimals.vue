<template>
    <section class="">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <!-- <img class="w-8 h-8 mr-2" src="../assets/img/logo.png" alt="logo"> -->
          <!-- Zoo Keeper -->
        </a>
        <div class="w-full rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                All Animals
            </h1>
            <div v-if="animals.length === 0" class="text-gray-500 dark:text-gray-400">
                No animals found.
                <div v-if="error" class="text-red-500 dark:text-red-400 text-sm">
                {{ error }}
                </div>
            </div>
            <ul v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <div v-for="animal in animals" :key="animal.id" class="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                    <div class="p-4">
                        <div class="grid grid-cols-2">
                            <div class="">
                                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">{{ animal.animalName }}</h2>
                                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ animal.species }}</p>
                            </div>
                            <div class="flex justify-end gap-4 items-center border-none">
                                <GreenButton :index="Feeding" />
                                <GreenButton :index="'Veterinary Records'" />
                            </div>
                        </div>
                        <div class="w-full h-0.5 my-2 bg-gray-300"></div>
                        <div class="grid text-sm w-full">
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-gray-600 dark:text-gray-400">Gender:</span>
                                <a class="text-black">{{ animal.gender }}</a>
                            </div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-gray-600 dark:text-gray-400">Birth Date:</span>
                                <a class="text-black">{{ animal.birthDate }}</a>
                            </div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-gray-600 dark:text-gray-400">Birth Place:</span>
                                <a class="text-black">{{ animal.birthPlace }}</a>
                            </div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="text-gray-600 dark:text-gray-400">Enclosure:</span>
                                <a class="text-black">{{ animal.enclosure }}</a>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600 dark:text-gray-400">Area:</span>
                                <a class="text-black">{{ animal.area }}</a>
                            </div>
                            <div class="w-full h-0.5 mt-2 bg-gray-300"></div>
                        </div>
                        <div class="grid w-full">
                            <div class="flex justify-between items-center mt-2 text-sm">
                                <span class="text-gray-600 dark:text-gray-400">Male:</span>
                                <a class="text-black">{{ animal.parentMaleName }}</a>
                            </div>
                            <div class="flex justify-between items-center mt-2 text-sm">
                                <span class="text-gray-600 dark:text-gray-400">Female:</span>
                                <a class="text-black">{{ animal.parentFemaleName }}</a>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <button @click="editAnimal(animal.id)" class="text-sm bg-blue-500 font-semibold text-white py-1 px-2 rounded-md hover:bg-blue-700">Edit</button>  
                            <button @click="deleteAnimal(animal.id)" class="text-sm bg-red-500 font-semibold text-white py-1 px-2 rounded-md hover:bg-red-700">Delete</button>
                        </div>
                    </div>
                </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
    import GreenButton from '../components/GreenButton.vue';
    export default {
        name: 'HomeAnimals',
        components: {
            GreenButton
        },
        data() {
            return {
                animals: [],
                error: null,
                Feeding: 'Feeding',
                VeterinaryRecords: 'Veterinary Records'
            };
        },
        methods: {
            async getAnimals() {
                try {
                    const response = await fetch('http://localhost:7106/api/AnimalRecords/all');
                    if (response.ok) {
                        this.animals = await response.json();
                    } else {
                        console.error('Failed to fetch animals. Status:', response.status);
                        const errorData = await response.json();
                        console.error('Error details:', errorData);
                        throw new Error(`Failed to fetch animals. Status: ${response.status}`);
                    }
                } catch (error) {
                    this.error = error.message;
                    console.error('Error fetching animals:', error);
                }
            },
            async deleteAnimal(id) {
                try {
                    const response = await fetch(`http://localhost:7106/api/AnimalRecords/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    });

                    if (response.ok) {
                        this.animals = this.animals.filter(animal => animal.id !== id);
                        console.log('Animal deleted successfully');
                    } else {
                        console.error('Failed to delete animal. Status:', response.status);
                        const errorData = await response.json();
                        console.error('Error details:', errorData);
                    throw new Error(`Failed to delete animal. Status: ${response.status}`);
                    }
                } catch (error) {
                    console.error('Error deleting animal:', error);
                }
            },
            async editAnimal(id) {
                this.$router.push({ name: 'EditAnimal', params: { id: id } });
            },
        },
        mounted() {
            this.getAnimals();
        },
    };
</script>
  
<style scoped>
/* Add your component styles here */
</style>
  