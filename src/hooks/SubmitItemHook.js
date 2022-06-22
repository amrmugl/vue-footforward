import axios from '../axios'

const useSubmitItems = () => {
  const uploadItem = async (values, formError) => {
    try {
      const response = await axios.post('/items', values)
      return response
    } catch (error) {
      if (error) {
        formError.value = error.message
      }
    }
  }
  const uploadImage = async (id, image, formError, uploading) => {
    const formData = new FormData()
    formData.append('file', image, image.name)
    try {
      uploading.value = true
      const response = await axios.post(`/items/${id}/picture`, formData, {
        maxBodyLength: 10000000000,
        maxContentLength: 10000000000,
      })
      return response
    } catch (error) {
      if (error) {
        formError.value = error.message
      }
    }
  }
  return {
    uploadItem,
    uploadImage,
  }
}

export default useSubmitItems
