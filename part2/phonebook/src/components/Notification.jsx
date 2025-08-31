
const Notification = ({ message, successStyle }) => {
  if (message === null) {
    return null
  }

  return (
    <div style={successStyle}>
      {message}
    </div>
  )
}

export default Notification