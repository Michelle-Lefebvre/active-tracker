<template>
  <div class="max-w-screen-sm px-4 py-10 mx-auto">
    <!-- App Msg -->
    <div v-if="statusMsg || errorMsg" class="p-4 mb-10 rounded-md shadow-md bg-light-grey">
      <p class="text-at-light-green">{{ statusMsg }}</p>
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>
  </div>

  <div v-if="dataLoaded">
    <!-- General Workout Info -->
    <div class="relative flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey">
      <div v-if="user" class="absolute flex left-2 top-2 gap-x-2">
        <div
          class="flex items-center justify-center rounded-full shadow-lg cursor-pointer h-7 w-7 bg-at-light-green"
          @click="editMode"
        >
          <img class="h-3.5 w-auto" src="../assets/images/pencil-light.png" alt="to edit" />
        </div>
        <div
          class="flex items-center justify-center rounded-full shadow-lg cursor-pointer h-7 w-7 bg-at-light-green"
        >
          <img class="h-3.5 w-auto" src="../assets/images/trash-light.png" alt="to delete" />
        </div>
      </div>
    </div>

    <img class="w-auto h-24" src="../assets/images/running-light-green.png" alt />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { supabase } from '../supabase/init';
import { useRoute } from 'vue-router';
import store from '../store/index';


export default {
  name: "view-workout",
  setup() {
    // Create data / vars
    const data = ref(null);
    const dataLoaded = ref(null);
    const errorMsg = ref(null);
    const statusMsg = ref(null);
    const route = useRoute();
    const user = computed(() => store.state.user)

    // Get current Id of route
    const currentId = route.params.workoutId;

    const getData = async () => {
      try {
        const { data: workouts, error } = await supabase.from('workouts').select('*').eq('id', currentId);
        if (error) throw error;
        data.value = workouts;
        dataLoaded.value = true;
      } catch (error) {
        // console.warn(error.message)
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = false;
        }, 5000);
      }
    }

    getData()

    // Get workout data

    // Delete workout

    // Edit mode
    const edit = ref(null)

    const editMode = () => {
      edit.value = !edit.value
    }

    // Add exercise

    // Delete exercise

    // Update Workout

    return {
      currentId,
      getData,
      statusMsg,
      errorMsg,
      data,
      dataLoaded,
      route,
      editMode,
      user
    };
  },
};
</script>
