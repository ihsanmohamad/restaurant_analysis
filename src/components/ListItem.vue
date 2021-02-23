<template>

      <div class="flex">
            <div class="bg-white shadow-xl rounded-lg w">
                <ul class="divide-y divide-gray-300">
                    <li v-for="item in data" :key="item" class="p-4">{{ item }}</li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
props: {
        data: {
        type: Array
        }
  },
}
</script>
