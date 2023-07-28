import Nav from "../componentes/Nav/Nav";
import Footer from "../componentes/Footer";
import BlocoProdutos from "../componentes/BlocoProdutos";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Produtos() {
    const navigate = useNavigate()
    const [listaPlantas, setListaPlantas] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/plantae/plantas/')
            .then((res) => {
                setListaPlantas(res.data)

            })
            .catch((err) => {
                alert('Aconteceu um erro inesperado, entre em contato com o suporte')
            })

    }, [])

    return (
        <div className="h-screen w-full ">
            <Nav />
            <div className="flex flex-col bg-fundo-tela p-5">
                <p className="text-5xl text-verde-padrao font-extralight font-titulos">ACERVO</p>
                <h3 className="font-extralight font-textos mt-5"> Aqui você encontra todas as nossas plantas naturais e com cachepô ou vaso confeccionados em cerâmica. Fácil para iniciar sua própria coleção de plantas. Compre sua planta favorita online aqui. Se você procura plantas de baixa manutenção o você está no site certo!</h3>
                {listaPlantas.map((informacaoPlanta, index) => {
                    return <>
                        <BlocoProdutos img={informacaoPlanta.imagem} nome={informacaoPlanta.nome} texto={informacaoPlanta.texto_base} valor={informacaoPlanta.valor} onClick={() => navigate('/produtoescolhido', {
                            state: {
                                plantaID: index
                            }
                        })} />
                    </>
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Produtos
