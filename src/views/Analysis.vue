<template>
  <card-skeleton v-if="state.loading"></card-skeleton>
  <div v-else-if="!state.data">
      <header class="bg-white shadow">
    <div class="p-4 space-y-4">
          <div class="flex items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
            <div class="space-y-2">
              <h1 id="pageTitle" class="flex items-center space-x-2">
               
                <span class="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">
                  Oops! There are no reviews.
                </span>
              </h1>
              <p class="text-base font-normal text-gray-600 dark:text-gray-300">
                We can't process analysis since there are no reviews.
              </p>
              <p class="text-base font-normal text-gray-600 dark:text-gray-300">
                You may return to
                <router-link
              to="/"
              class="text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out  hover:text-indigo-400 focus:outline-none"
              >home page</router-link>
              </p>
            </div>
          </div>

         
        </div>
  </header>
  </div>
  <div v-else>
      <div class="flex justify-between items-center">
                <div class="flex"> 
                
                </div>
                <div>

                </div>
                <!-- <a :href="state.data.result.website" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-8 "><path fill="#3b5998" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a> -->
                
                <a class="inline-flex items-center justify-center px-3 py-3 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none" :href="downloadLink" >Download Review</a>
            
                
            </div>
    <div class=" px-10 my-4 py-6 bg-white rounded-lg shadow-md">
            <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
        <div>
            <h2 class="text-2xl font-semibold leading-tight">Reviews</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                style="background-color: #008FFB" class="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-black uppercase tracking-wider">
                                Positive
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in state.data?.review?.positive" :key="data">
                            <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm w-2/5">
                                <div class="flex items-center">
                                    
                                    <div class="ml-3">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {{data}}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                style="background-color: #00E396" class="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-black uppercase tracking-wider">
                                Neutral
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in state.data?.review?.neutral" :key="data">
                            <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm w-2/5">
                                <div class="flex items-center">
                                    
                                    <div class="ml-3">
                                        <p  class="text-gray-900 whitespace-no-wrap">
                                            {{data}}
                                        </p>
                                        
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                style="background-color: #FEB019" class="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-black uppercase tracking-wider">
                                Negative
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in state.data?.review?.negative" :key="data">
                            <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm w-2/5">
                                <div class="flex items-center">
                                    
                                    <div class="ml-3">
                                        <p  class="text-gray-900 whitespace-no-wrap">
                                            {{data}}
                                        </p>
                                       
                                    </div>
                                </div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
        </div> 
    <div class="px-10 my-20 py-6 bg-white rounded-lg shadow-md">
            
            <div class="mt-2">
                <h2 class="text-2xl text-gray-700 font-bold">Pie Chart</h2>
                <p class="mt-2 text-gray-600">Sentiment Analysis</p>
                <div class="container">
                <div class="md:max-w-md">
                <apexchart
                type="pie"
                :options="chartData.chartOptions"
                :series="[state.data?.positive_count, state.data?.neutral_count, state.data?.negative_count]"
                ></apexchart>
                </div>
                </div>

            </div>
        </div> 
  </div>
  
 
</template>

<script>
import axios from "axios"
import { computed, reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import CardSkeleton from '@/components/CardSkeleton.vue'



export default {
components: { CardSkeleton },

setup(){
        const route = useRoute()

        const place_id = route.params.id

        const state = reactive({
        data: Object,
        loading: false
        })

        const chartData = reactive({
            chartOptions: {
            labels: ['Positive', 'Neutral', 'Negative'],
            chart: {
                id: "sentiment_analysis",
                toolbar: { tools: { download: false } }
                },
            }        
        })

        const downloadLink = computed(function () { 
                if(state?.data){
                    return `https://carimakan.herokuapp.com/download_data?place_id=${place_id}`
                }
                else{
                    return "#"
                }
            })


       

        const fetchResults = async () => {
            state.loading = true;
        
            const res = await axios.get(`https://carimakan.herokuapp.com/get_analysis?place_id=${place_id}`);


            if (res.data) {
            state.data = res?.data
            }
            else {
                state.data = null
            }
            
        
            state.loading = false;
        }

         

        onBeforeMount(() =>{
        fetchResults();
        }) 
        

        return { state, chartData, downloadLink }
}
}
</script>

<style>

</style>