<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Willkommen in Klein Hehlen
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Hier kannst du dir Höfe aus Klein Hehlen ansehen.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="../assets/img/HofNiebuhr.webp" alt="">
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-red-600">
                <a href="#" class="hover:underline">
                  Regional Landwirtschaft
                </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Kommen wir zum wahrscheinlich schönsten Hof in Klein Hehlen...
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
                </p>
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="../assets/img/Bauern.webp" alt="">
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-red-600">
                <a href="#" class="hover:underline">
                  Hof Niebuhr
                </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Kommen wir zum wahrscheinlich schönsten Hof in Klein Hehlen...
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
                </p>
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="../assets/img/HofNiebuhr.webp" alt="">
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-red-600">
                <a href="#" class="hover:underline">
                  Hof Niebuhr
                </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  Kommen wir zum wahrscheinlich schönsten Hof in Klein Hehlen...
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
                </p>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cards',
})
</script>