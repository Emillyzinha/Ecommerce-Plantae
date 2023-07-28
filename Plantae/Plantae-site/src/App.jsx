import { Route, Routes } from 'react-router-dom'
import Principal from './pages/Principal'
import Produtos from './pages/Produtos'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import ProdutoEscolhido from './pages/Produto'
import Carrinho from './pages/Carrinho'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Principal/>} />
      <Route path='/produtos' element={<Produtos/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/produtoescolhido' element={<ProdutoEscolhido/>}/>
      <Route path='/carrinho' element={<Carrinho/>} />
    </Routes>
  )
}

export default App