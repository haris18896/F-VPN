// ** GET HEADERS OBJECT WITH JWT TOKEN
export const getHeadersWithJwtToken = () => {
  const token = localStorage.getItem('accessToken')
  let headers = {}
  if (token) {
    headers = {
      Authorization: `JWT ${token}`,
    }
  }

  return headers
}

