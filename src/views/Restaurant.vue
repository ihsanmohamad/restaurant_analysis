<template>

<card-skeleton v-if="state.loading"></card-skeleton>

<div v-else class=" px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div class="flex justify-between items-center">
            <div v-if="state.data.result?.website" class="flex"> 
            <a :href="state.data.result?.website" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></a>
             <a :href="state.data.result?.website" target="_blank"><p class="ml-4 pt-1">Go to website</p></a>
            </div>
            <div v-else>

            </div>
            <!-- <a :href="state.data.result.website" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-8 "><path fill="#3b5998" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a> -->
            
            <p v-if="state.data.result?.opening_hours?.open_now === true" class="px-2 py-1 bg-green-500 text-gray-100 font-bold rounded">Open</p>
            <p v-else class="px-2 py-1 bg-red-500 text-gray-100 font-bold rounded">Closed</p>
        
            
        </div>
        <div class="mt-2">
            <h2 class="text-2xl text-gray-700 font-bold">{{state.data.result?.name}}</h2>
            <p class="mt-2 text-gray-600">{{ state.data.result?.formatted_address }}</p>
        </div>
        <div class="mt-8">
            <h2 class="text-lg text-gray-700 font-bold">Working Hour</h2>
            <list-item :data="state.data.result?.opening_hours?.weekday_text"></list-item>
            <p v-if="!state.data.result?.opening_hours?.weekday_text">No working hours data!</p>
        </div>
        <div class="mt-8">
            <h2 class="text-lg text-gray-700 font-bold">Latest Reviews</h2>
            <user-review v-for="data in state.review" :key="data" :review="data" class="mt-4"></user-review>
            <p v-if="!state.review">No reviews!</p>
        </div>

        <div class="flex flex-col md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-10  items-center mt-8">
           
            <p @click="() => router.push(`/analysis/${state.data.result?.place_id}`)" class="inline-flex items-center justify-center px-3 py-3 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 cursor-pointer focus:outline-none">Get Analysis Report</p>
            <a class="inline-flex items-center justify-center px-3 py-3 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none" :href="state.data.result?.url" target="_blank">Open on Google Map</a>
            <!-- <div>
                <a class="flex items-center" href="#">
                    <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar">
                    <h1 class="text-gray-700 font-bold">Khatab wedaa</h1>
                </a>
            </div> -->
        </div>
    </div> 
</template>

<script>
import axios from "axios"
import { reactive, computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CardSkeleton from '@/components/CardSkeleton.vue'
import UserReview from '@/components/UserReview.vue'
import ListItem from '@/components/ListItem.vue'

export default {
    components: { CardSkeleton, UserReview, ListItem },
    setup(){
        const route = useRoute()
        const router = useRouter()


        const place_id = route.params.id

        const state = reactive({
        data: Object,
        loading: false,
        review: Object
        })

        const fetchResults = async () => {
            state.loading = true;
        
            const res = await axios.get(`https://carimakan.herokuapp.com/place_detail?place_id=${place_id}`);

            if (res.data) {
            state.data = res?.data
            }
        
            state.loading = false;
        }

        const fetchReview = async () => {
            state.loading = true;
        
            const res = await axios.get(`https://carimakan.herokuapp.com/restaurant_review?place_id=${place_id}`);

            if (res.data) {
            state.review = res?.data
            }
            else{
                state.review = null
            }
        
            state.loading = false;
        }

       
        onBeforeMount(() =>{
        fetchResults();
        fetchReview();
        })    

        return { state, router }
    }
}
</script>

<style>

</style>