import Header from './component/Header'
import Card from './component/Card'
import Data from './travelData'

function App() {
  const travelData = Data.map(data => {
    return <Card 
            key={data.id}
            data={data}/>
  })
  
  return (
    <div className="App">
      <Header />
      <section className="cards-list">
        {travelData}
      </section>
    </div>
  )
}

export default App
