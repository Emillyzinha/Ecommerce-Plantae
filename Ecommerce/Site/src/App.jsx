import { Route, Routes } from 'react-router-dom'
import Principal from './pages/Principal'
import Produtos from './pages/Produtos'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import ProdutoEscolhido from './pages/Produto'
import Carrinho from './pages/Carrinho'
import axios from 'axios'
import Nav from './componentes/Nav/Nav'
import Footer from './componentes/Footer'
import { useEffect, useState } from 'react'


function App() {
  const [apelido, setApelido] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      const tokenStringCompleto = localStorage.getItem('token')
      const tokenJSONCompleto = JSON.parse(tokenStringCompleto)
      const tokenAccessPrimeiro = tokenJSONCompleto.access
      axios.get('http://127.0.0.1:8000/auth/users/me/', {
        headers: {
          Authorization: `JWT ${tokenAccessPrimeiro}`
        }
      })
        .then((res) => {
        })
        .catch((err) => {
          console.log('aqui1', err);
          if (err.response.status == 401) {
            axios.post('http://127.0.0.1:8000/auth/jwt/refresh', {
              refresh: tokenJSONCompleto.refresh
            })
              .then((res) => {
                const tokenAccess = res.data.access
                console.log('aqui ne', res.data.access);

                axios.get('http://127.0.0.1:8000/auth/users/me/', {
                  headers: {
                    Authorization: `JWT ${res.data.access}`
                  }
                })
                  .then((res) => {
                    setApelido(res.data.username)
                  }).catch((err) => {
                  })
              })
              .catch((err) => {
                console.log('aqui2', err);
              })
          } else {
          }
        })
    }
  }, [])

  return (
    <>
      <Nav apelido={apelido} />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/produtoescolhido' element={<ProdutoEscolhido />} />
        <Route path='/carrinho' element={<Carrinho />} />
      </Routes>
    </>
  )
}

export default App