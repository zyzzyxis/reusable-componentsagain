import { useEffect, useState} from 'react'
import axios from 'axios'

const LoadDataDemo = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    getData
  }, [])

  const getData = async() => {
    try{
      let res =  await axios.get('https://reqres.in/ap/users?delay=3')
      setData(res.data.data ? res.data.data : res.data)
      setLoading(false)
    } catch(err){
      setError(err)
      setLoading(false)
    }
  }

  const renderData = () => {
    return data.map( d => <pre>{JSON.stringify(d, null, 1)}</pre>)
  }

  if(loading) return <p>Loading</p>
  if(error) return <p>Error occurred</p>
  return(
    <div>
      <h1>Home</h1>
        <div>
          <header>data</header>
          {renderData()}
        </div>
    </div>
  )
}

export default LoadDataDemo