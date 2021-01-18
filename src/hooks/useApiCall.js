import {useState} from 'react';
import apiCalls from '../logic';

export default function useApiCall(apiCallUseCase) {
  const [response, setResponse] = useState({
    loading: false,
    data: null,
    error: null
  })

  const useCase = async () => {
    setResponse({loading: true, data: null, error: null})

    try {
      const data = await apiCalls[apiCallUseCase]();
      setResponse({loading: false, data, error: null});
    } catch (error) {
      setResponse({loading: false, data: null, error})
    }
  }

  return [response, useCase]
}