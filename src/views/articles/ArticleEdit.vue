<script setup>
import useArticles from "../../composables/articles";
import { onMounted } from "vue";

const { article, getArticle, updateArticle, errors } = useArticles();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(() => getArticle(props.id));

</script>

<template>
    <div class="mt-12">
      <form
        class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
        @submit.prevent="updateArticle($route.params.id)"
      >
        <div class="space-y-6">
          <div class="mb-6">
            <label
              for="title"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Title</label
            >
            <input
              type="text"
              id="title"
              v-model="article.title"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
            <div v-if="errors.title">
              <span class="text-sm text-red-400">{{ errors.title[0] }}</span>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="description"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-300
              "
              >Description</label
            >
            <input
              type="text"
              id="description"
              v-model="article.description"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            />
            <div v-if="errors.description">
              <span class="text-sm text-red-400">{{ errors.description[0] }}</span>
            </div>
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="
                px-4
                py-2
                bg-indigo-500
                hover:bg-indigo-700
                text-white
                rounded
              "
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>