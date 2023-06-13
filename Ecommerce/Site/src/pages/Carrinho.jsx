import { useLocation } from "react-router-dom";
import Footer from "../componentes/Footer";
import Nav from "../componentes/Nav/Nav";
import SecaoProduto from "../componentes/SecaoProduto";
import { useEffect, useState } from "react";
import axios from "axios";
import Botao from "../componentes/Botao";


function Carrinho() {
    const location = useLocation()

    const [img, setImg] = useState('')
    const [nomePlanta, setNomePlanta] = useState('')
    const [valor, setValor] = useState('')
    const [testeLista, setTesteLista] = useState(false)
    const [total, setTotal] = useState(0)
    const [carrinhoStorage, setCarrinhoStorage] = useState(JSON.parse(localStorage.getItem('carrinhoProdutos')) || []);
    let paraRemover = []

    useEffect(() => {
        if (location.state != null) {
            axios.get('http://127.0.0.1:8000/plantae/plantas/')
                .then((res) => {
                    if (location.state == null) {
                    } else {
                        let plantaID = location.state.idPlanta
                        const produtoSelecionado = res.data[plantaID]
                        setImg(produtoSelecionado.imagem)
                        setNomePlanta(produtoSelecionado.nome)
                        setValor(produtoSelecionado.valor)
                    }
                })
                .catch((err) => {
                    alert('Deu errado irmão')
                })
        }

        let valorTotal = 0
        let valorTotalProdutos = 0
        carrinhoStorage.map((item) => {
            valorTotalProdutos = item.valor * item.qtd
            valorTotal += valorTotalProdutos
        })
        setTotal(valorTotal)
    }, [paraRemover, carrinhoStorage])

    const comprar = () => {
        if (carrinhoStorage.length == []) {
            alert('Você não tem nenhum produto')
        } else {
            alert('Compra feita com sucesso')
            localStorage.clear()
        }
    }

    const aumentarProduto = (index) => {
        let novoCarrinho = [...carrinhoStorage]
        novoCarrinho[index].qtd += 1
        setCarrinhoStorage(novoCarrinho)
        localStorage.setItem('carrinhoProdutos', JSON.stringify(carrinhoStorage))
    }

    const diminuirProduto = (index) => {
        let novoCarrinho = [...carrinhoStorage]
        if (novoCarrinho[index].qtd == 1) {
            paraRemover = novoCarrinho[index]
            novoCarrinho.splice(paraRemover, 1)
            setCarrinhoStorage(novoCarrinho)
        } else {
            novoCarrinho[index].qtd -= 1
            setCarrinhoStorage(novoCarrinho)
        }
        localStorage.setItem('carrinhoProdutos', JSON.stringify(novoCarrinho))
    }

    const excluir = (index) => {
        let novoCarrinho = [...carrinhoStorage]
        novoCarrinho.splice(index, 1)
        setCarrinhoStorage(novoCarrinho)
        localStorage.setItem('carrinhoProdutos', JSON.stringify(novoCarrinho))

    }

    return (
        <>
            {location.state == null ?
                <div className="h-screen w-full ">
                    <div className="flex flex-col bg-fundo-tela p-5 h-full">
                        <p className="text-5xl text-verde-padrao mb-2 font-titulos font-bold">Carrinho</p>
                        {
                            carrinhoStorage.map((item, index) => {
                                return <>
                                    <SecaoProduto img={item.imagem} nome={item.nome} valor={item.valor} qtd={item.qtd} aumentar={() => aumentarProduto(index)} diminuir={() => diminuirProduto(index)} excluir={() => excluir(index)} />
                                </>
                            })
                        }
                        <div className="border w-full mt-10" />
                        <div className="flex flex-row p-3 justify-between">
                            <h3 className='font-textos font-semibold text-3xl'>Subtotal</h3>
                            <h3 className='font-textos font-semibold text-3xl'>{total}</h3>
                        </div>
                        <div className="w-full flex justify-center mt-3">
                            <Botao textoBotao='Comprar' onClick={() => comprar()} />
                        </div>
                    </div>
                    <Footer />
                </div>
                :
                <div className="h-screen w-full ">
                    <Nav />
                    <div className="flex flex-col bg-fundo-tela p-5">
                        <p className="text-5xl text-verde-padrao mb-2 font-titulos font-bold">Carrinho</p>
                        {
                            carrinhoStorage.map((item, index) => {
                                return <>
                                    <SecaoProduto img={item.imagem} nome={item.nome} valor={item.valor} qtd={item.qtd} aumentar={() => aumentarProduto(index)} diminuir={() => diminuirProduto(index)} excluir={() => excluir(index)} />
                                </>
                            })
                        }
                        <div className="h-full ">
                            <div className="border w-full mt-10" />
                            <div className="flex flex-row p-3 justify-between">
                                <h3 className='font-textos font-semibold text-3xl'>Subtotal</h3>
                                <h3 className='font-textos font-semibold text-3xl'>{total}</h3>
                            </div>
                            <div className="w-full flex justify-center mt-3">
                                <Botao textoBotao='Comprar' onClick={() => comprar()} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}

export default Carrinho
