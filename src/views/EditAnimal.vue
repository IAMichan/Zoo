<template>
    <section class="dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <!-- <img class="w-8 h-8 mr-2" src="../assets/img/logo.png" alt="logo"> -->
                <!-- Zoo Keeper -->
            </a>
            <div class="w-2/4 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Edit an animal
                    </h1>
                    <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="AnimalName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input v-model="AnimalName" type="text" name="AnimalName" id="AnimalName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="">
                                <label for="Gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                <select v-model="Gender" name="Gender" id="Gender" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@company.com" required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label for="BirthDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BirthDate</label>
                                <input type="date" v-model="BirthDate" name="BirthDate" id="BirthDate" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="Species" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Species</label>
                                <select v-model="Species" name="Species" id="Species" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" required>
                                    <option value="Monkey">Monkey</option>
                                    <option value="Elephant">Elephant</option>
                                    <option value="Snake">Snake</option>
                                    <option value="Parrot">Parrot</option>
                                    <option value="Spider">Spider</option>
                                </select>
                            </div>
                            <div class="">
                                <label for="BirthPlace" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BirthPlace</label>
                                <input type="text" v-model="BirthPlace" name="BirthPlace" id="BirthPlace" placeholder="Example: Amsterdam Zoo" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="">
                                <label for="ParentFemaleName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother</label>
                                <input type="text" v-model="ParentFemaleName" name="ParentFemaleName" id="ParentFemaleName" placeholder="Example: Laureen the Squirrel Monkey" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required>
                            </div>
                            <div class="">
                                <label for="ParentMaleName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father</label>
                                <input type="text" v-model="ParentMaleName" name="ParentMaleName" id="ParentMaleName" placeholder="Example: Sam the Squirrel Monkey" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="">
                                <label for="Area" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
                                <select v-model="Area" name="Area" id="Area" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" required>
                                    <option value="Monkey">Monkey</option>
                                    <option value="Elephant">Elephant</option>
                                    <option value="Snake">Snake</option>
                                    <option value="Parrot">Parrot</option>
                                    <option value="Spider">Spider</option>
                                </select>
                            </div>
                            <div class="">
                                <label for="Enclosure" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enclosure</label>
                                <input type="text" v-model="Enclosure" name="Enclosure" id="Enclosure" placeholder="Example: 1" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update animal</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EditAnimal',
    data() {
        return {
            AnimalName: '',
            Gender: '',
            Species: '',
            BirthPlace: '',
            BirthDate: '',
            ParentMaleName: '',
            ParentMaleId: '1',
            ParentFemaleName: '',
            ParentFemaleId: '2',
            Area: '',
            Enclosure: '',
            FeedingData: [],
            FeedingInformations: [],
            VeterinaryRecords: [],
        };
    },
    mounted() {
        this.getAnimal(this.$route.params.id);
    },

    methods: {
        async getAnimal(id) {
            try {
                const response = await fetch(`http://localhost:7106/api/AnimalRecords/edit/${id}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const json = await response.json();
                console.log(json);
                
                this.AnimalName = json.animalName || '';
                this.Gender = json.gender || '';
                this.Species = json.species || '';
                this.BirthPlace = json.birthPlace || '';
                this.BirthDate = json.birthDate || '';
                this.ParentMaleName = json.parentMaleName || '';
                this.ParentMaleId = json.parentMaleId || '1';
                this.ParentFemaleName = json.parentFemaleName || '';
                this.ParentFemaleId = json.parentFemaleId || '2';
                this.Area = json.area || '';
                this.Enclosure = json.enclosure || '';

                // Now the form fields should be pre-filled with the existing data
                console.log('Initialized form with animal data:', this);

            } catch (error) {
                console.error('Error fetching animal:', error);
            }
        },


        async submitForm() {
            try {
                // rest of the code...
                const response = await fetch(`http://localhost:7106/api/AnimalRecords/edit/${this.$route.params.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Id: this.$route.params.id,
                        AnimalName: this.AnimalName,
                        Gender: this.Gender,
                        Species: this.Species,
                        BirthPlace: this.BirthPlace,
                        BirthDate: this.BirthDate,
                        ParentMaleName: this.ParentMaleName,
                        ParentMaleId: this.ParentMaleId,
                        ParentFemaleName: this.ParentFemaleName,
                        ParentFemaleId: this.ParentFemaleId,
                        Area: this.Area,
                        Enclosure: this.Enclosure,
                    }),
                });
                console.log(this);

                if (response.ok) {
                    console.log('Data posted successfully');
                    this.$router.push('/home');
                } else {
                    console.log('Error posting data');
                }
            } catch (error) {
                console.error('Error updating animal:', error);
            }
        },


    }

};
</script>
