import { AlertCircle } from 'tabler-icons-react'

const ErrorMessage = ({
  inputName,
  errors,
}: {
  inputName: string
  errors: Record<string, any>
}) => {
  const error = errors[inputName]

  return (
    <span style={{ color: 'red', height: '10px', marginBottom: '8px' }}>
      {error ? (
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.8em',
          }}
        >
          <AlertCircle size={16} style={{ marginRight: 5 }} />{' '}
          {formatError(error?.message)}
        </span>
      ) : null}
    </span>
  )
}

const formatError = (error: string | Record<string, any>) => {
  if (typeof error === 'string') {
    return error
  }

  const errors = Object.values(error).join(', ')
  return errors
}

export default ErrorMessage
