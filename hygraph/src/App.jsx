import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { MainLayout } from './Layouts/MainLayout';
import { MainPage } from './Pages/MainPage/MainPage';
import { AllBlogs } from './Pages/AllBlogs/AllBlogsPage';

// I skal bygge en content model i HyGraph
// I skal kunne fetche og vise jeres blog posts i frontenden
// Man skal kunne klikke ind på en sektion og kun hente de nyeste posts (dem fra dags dato)
// Man skal kunne sortere sine blog posts efter Dato og Navn i en drop down menu. 

// Bonus
// Man skal kunne søge efter en bestemt blog efter titel
// Man skal kunne uploade nye blogs til HyGraph med en mutation
// Man skal kunne slette blog indlæg


function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/blogs' element={<AllBlogs/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
