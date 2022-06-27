
// CMS => Content Manage System

import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

// WordPress
// Traz tanto o painel de admin quanto a parte visual do front-end (temas)

// Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)
// React consuirá essa API de CMS

// query / mutation

// query => buscar dados

// mutation =>  criar, alterar ou deletar dados

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
