<template>
  <form
    class="mx-10 mt-10"
    enctype="multipart/form-data"
    @submit.prevent="submitItemsForm"
  >
    <div class="mt-5">
      <label for="name" class="text-sm">Name</label>
      <input
        class="w-full h-10 px-2 mt-2 transition-all rounded-md bg-appBlue-light focus:outline-none focus:bg-appBlue-extraLight text-appBlack"
        type="text"
        id="name"
        name="name"
        v-model="formValues.name"
        required="true"
      />
    </div>
    <div class="mt-5">
      <label for="fullname" class="text-sm">Full name</label>
      <input
        class="w-full h-10 px-2 mt-2 transition-all rounded-md bg-appBlue-light focus:outline-none focus:bg-appBlue-extraLight text-appBlack"
        type="text"
        id="fullname"
        name="fullname"
        v-model="formValues.fullname"
        required="true"
      />
    </div>
    <div class="mt-5">
      <label for="description" class="text-sm">Description</label>
      <textarea
        class="w-full px-2 py-2 mt-2 transition-all rounded-md resize-none h-28 focus:outline-none focus:bg-appBlue-extraLight bg-appBlue-light text-appBlack"
        id="description"
        name="description"
        v-model="formValues.description"
        required="true"
      ></textarea>
    </div>
    <div class="mt-5">
      <label for="price" class="text-sm">Price</label>
      <input
        class="w-full h-10 px-2 mt-2 transition-all rounded-md bg-appBlue-light focus:outline-none focus:bg-appBlue-extraLight text-appBlack"
        type="number"
        id="price"
        name="price"
        v-model="formValues.price"
        required="true"
      />
    </div>
    <div class="mt-5">
      <label class="block text-sm" for="image">Upload Image</label>
      <input
        class="block w-full mt-2 text-lg rounded-md cursor-pointer text-appBlack bg-appBlue-extraLight focus:outline-none"
        id="image"
        name="image"
        @change="fileChanged($event)"
        type="file"
        required="true"
        accept="image/*"
      />
      <p class="mt-2 text-sm" id="file_input_help">SVG, PNG or JPG</p>
    </div>
    <div class="mt-5">
      <label for="category" class="text-sm">Select category</label>
      <select
        name="category"
        v-model="formValues.category"
        required="true"
        id="category"
        class="w-full h-10 px-2 mt-2 transition-all rounded-md bg-appBlue-light focus:outline-none focus:bg-appBlue-extraLight text-appBlack"
      >
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <div class="mt-5">
      <label for="brand" class="text-sm">Select brand</label>
      <select
        name="brand"
        required="true"
        v-model="formValues.brand"
        id="brand"
        class="w-full h-10 px-2 mt-2 transition-all rounded-md bg-appBlue-light focus:outline-none focus:bg-appBlue-extraLight text-appBlack"
      >
        <option v-for="brand in brands" :key="brand" :value="brand">
          {{ brand }}
        </option>
      </select>
    </div>
    <p class="mt-5 text-sm text-center text-red-400">{{ formError }}</p>
    <div class="my-10 text-center">
      <AppButton
        type="submit"
        required="true"
        classes="px-5 py-1 bg-appGreen hover:bg-appGreen-light hover:text-appBlack rounded-md disabled:cursor-not-allowed disabled:bg-appGreen-light disabled:text-appBlack"
        :disabled="uploading"
      >
        <span class="flex items-center justify-center"
          >Add Item
          <span v-show="uploading" class="inline-flex ml-4">
            <AppSpinner width="5" color="fill-appBlue-light" /> </span
        ></span>
      </AppButton>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useSubmitItems from '../../hooks/SubmitItemHook'
import AppButton from '../Shared/AppButton.vue'
import AppSpinner from '../Shared/AppSpinner.vue'

const formError = ref('')
const file = ref(null)
const router = useRouter()
const { uploadItem, uploadImage } = useSubmitItems()
const uploading = ref(false)

const categories = ['child', 'toddler', 'men', 'women', 'unisex']
const brands = [
  'jordan',
  'nike',
  'puma',
  'reebok',
  'vans',
  'yeezy',
  'adidas',
  'new_balance',
]
const formValues = reactive({
  name: '',
  fullname: '',
  description: '',
  price: 0,
  category: '',
  brand: '',
})

const fileChanged = (event) => {
  const target = event.target
  if (target && target.files) {
    file.value = target.files[0]
  }
}

const submitItemsForm = async () => {
  const values = {
    name: formValues.name,
    fullname: formValues.fullname,
    size: [40, 41, 42, 43, 44, 45, 46],
    description: formValues.description,
    price: formValues.price,
    category: formValues.category,
    brand: formValues.brand,
  }
  const itemResponse = await uploadItem(values, formError)
  if (itemResponse.data.id && file.value) {
    await uploadImage(itemResponse.data.id, file.value, formError, uploading)
    router.push('/admin')
  }
}
</script>
