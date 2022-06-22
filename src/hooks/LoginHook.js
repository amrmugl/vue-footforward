import axios from '@/axios'
import { useRouter } from 'vue-router'

const useAuthForm = () => {
  const router = useRouter()
  const submitLogin = async (values, formError) => {
    try {
      await axios.post('/auth/signin/ad', values)
      router.push('/admin')
    } catch (error) {
      if (error) {
        formError.value = 'User with given credentials does not exist'
      }
    }
  }
  return {
    submitLogin,
  }
}

export default useAuthForm
