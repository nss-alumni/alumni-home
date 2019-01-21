import { ErrorSnackbarContext } from 'components/ErrorSnackbar'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

export default (
  requestFn,
  { defaultValue, effectArray = [], errorMessage },
) => {
  const { addMessage } = useContext(ErrorSnackbarContext)

  const [data, setData] = useState(defaultValue)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    const cancelSource = axios.CancelToken.source()

    requestFn({ cancelToken: cancelSource.token })
      .then(setData)
      .then(() => setPending(false))
      .catch(({ message, __CANCEL__ }) => {
        // NOTE(adam): a cancellation should not trigger a message
        if (!__CANCEL__) {
          addMessage(errorMessage || message)
        }
      })

    return () => cancelSource.cancel('Fetch cancelled by unmounting.')
  }, effectArray)

  return [data, pending]
}
