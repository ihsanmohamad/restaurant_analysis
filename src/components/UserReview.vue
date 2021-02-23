<template>
<div class="flex items-start">
  
  <div>
    <p class="flex items-baseline">
      <span class="text-gray-600 font-bold">{{ review.name }}</span>
    </p>
    <Rating :stars="review.rating"/>
    
    <div class="mt-3">
      <p class="mt-1">{{ review.text }}</p>
    </div>
    
  </div>
</div>
</template>

<script>
import Rating from '@/components/Rating.vue'
export default {
    components: { Rating },
    props: {
        review: {
        type: Object
        }
  },
    setup(){

    }
}
</script>

