import { ErrorSnackbarContext } from 'components/ErrorSnackbar'
import { useContext, useEffect, useState } from 'react'

export default (
  requestFn,
  { errorMessage, defaultValue, effectArray = [] },
) => {
  const { addMessage } = useContext(ErrorSnackbarContext)

  const [data, setData] = useState(defaultValue)
  const [pending, setPending] = useState(true)

  useEffect(() => {
    requestFn()
      .then(setData)
      .then(() => setPending(false))
      .catch(({ message }) => addMessage(errorMessage || message))
  }, effectArray)

  return [data, pending]
}
