import { Provider } from "react-redux"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import { GlobalCss } from "./styles"
import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
