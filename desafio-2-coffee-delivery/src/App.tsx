import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { CoffeeCartContextProvider } from "./contexts/CoffeesContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCartContextProvider>
          <Router />
        </CoffeeCartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
