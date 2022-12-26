import NoRedux from './noRedux/No'
import WithRedux from './withRedux/With'

function App() {
  return (
    <div className="App">
      <h1>With Redux Without Redux</h1>
      <NoRedux></NoRedux>
      <WithRedux></WithRedux>
    </div>
  )
}

export default App
