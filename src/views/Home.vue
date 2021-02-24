<template>
  <main>
    <div class="bg-gray-50">
      <div
        class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Search for Restaurants
          
          
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
         <div class="container mx-auto py-8">
                <input class="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl shadow-lg" 
                type="search" placeholder="Search..." :value="state.lastSearch" @input="debounce(function () {
                 state.lastSearch = $event.target.value 
                 fetchSearchResults(state.lastSearch)
                }
                 )">
                <!-- type="search" placeholder="Search..." :value="state.lastSearch" @input="debounce(() => { state.lastSearch = $event.target.value })" @change="fetchSearchResults(state.lastSearch)"> -->
         </div>
        </div>

      <place-card v-for="place in state.searchResults" :key="place.place_id" :place="place"></place-card>
      <card-skeleton  v-if="state.loading"></card-skeleton>
      </div>
    </div>
    
  </main>
</template>

<script>
// see the syntax-sugared version in About.vue
import axios from "axios"

import { reactive } from 'vue'

import ButtonRepo from '@/components/ButtonRepo.vue'
import PlaceCard from '@/components/PlaceCard.vue'
import CardSkeleton from '@/components/CardSkeleton.vue'
export default {
  components: { ButtonRepo, PlaceCard, CardSkeleton },

  setup() {
    const state = reactive({
      place_data: [],
      loading: false,
      lastSearch: "" 
    })

    function createDebounce() {
      let timeout = null;
      return function (fnc, delayMs) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fnc();
        }, delayMs || 1000);
      };
    }


    const fetchSearchResults = async (searchTerm) => {
      state.lastSearch = "";
      state.loading = true;
      if(searchTerm) {
        state.lastSearch = searchTerm;
        state.searchResults = [];
        const res = await axios.get(`https://makanmanoi.herokuapp.com/search_place?restaurant=${searchTerm}`);

        if (res.data) {
          state.searchResults = res?.data
        }
      } 
      state.loading = false;
    }

    
    return {
      debounce: createDebounce(), state, fetchSearchResults
    }
  }
}

</script>