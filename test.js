import axios from 'axios'

const url = 'https://t4e-testserver.onrender.com/api'

async function load() {
  const res1 = await axios.post(`${url}/public/token`, {
    studentId: 'E0323018',
    set: 'setA',
    password: '849794'
  })

  const token = res1.data.token
  const dataUrl = res1.data.dataUrl

  const res2 = await axios.get(`${url}${dataUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  console.log(res2.data.data.orders[0])
}

load()