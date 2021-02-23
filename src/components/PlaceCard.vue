<template>
  <div @click="() => router.push(`/restaurant/${place.place_id}`)" class="bg-white shadow-lg rounded-lg -mt-4 cursor-pointer my-10">
    <div class="py-5 px-5">
      <span class="font-bold text-gray-800 text-2xl" >{{place.name}}</span>
      <div class="flex flex-col items-center  justify-between sm:flex-row pt-6 sm:pt-0">
        <div class="text-sm text-gray-600 font-light w-4/5">
          {{place.formatted_address}}
        </div>
        
        <div class="text-base font-bold pt-6 sm:pt-0 sm:w-1/5">
          <div>
            Total Reviews: <span class="text-indigo-600">{{ place.user_ratings_total }}</span> 
          </div>
          <Rating :stars="place.rating"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

import Rating from '@/components/Rating.vue'
export default {
  name: "PlaceCard",
  components: { Rating },
  props: {
        place: {}
  },

  

  setup(props){
    const router = useRouter()
    return { router }
  }
}
</script>
