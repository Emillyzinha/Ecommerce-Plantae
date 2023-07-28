import { useLocation, useNavigate } from "react-router-dom";
import BlocoProdutos from "../componentes/BlocoProdutos"
import Footer from "../componentes/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../componentes/Nav/Nav";
import Botao from "../componentes/Botao";

function ProdutoEscolhido() {
    const location = useLocation();
    let plantaID = location.state.plantaID;

    const navigate = useNavigate()

    const [img, setImg] = useState('')
    const [nomePlanta, setNomePlanta] = useState('')
    const [valor, setValor] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/plantae/plantas/')
            .then((res) => {
                const planta = res.data[plantaID]
                setImg(planta.imagem)
                setNomePlanta(planta.nome)
                setValor(planta.valor)
            })
            .catch((err) => {
                alert('Aconteceu um erro inesperado')
            })
    }, [])

    const navegarCarrinho = () => {
        navigate('/carrinho', {
            state: {
                idPlanta: plantaID
            }
        })
    }

    return (
        <div className="h-screen w-full ">
            <Nav />
            <div className="flex flex-col bg-fundo-tela p-5">
                <div className="w-full h-[50vh] bg-[#3C664C] flex justify-center items-center">
                    <div className="border-2 border-black p-2 py-5 w-80 flex justify-center">
                        <img src={img} alt="Planta selecionada" className="h-[40vh]" />
                    </div>
                </div>
                <p className='text-[2rem] text-center font-extralight p-1 font-titulos'>{nomePlanta}</p>
                <div className="border-t border-black w-full" />
                <h3 className="text-[16px] pt-1 text-[#6B665F] font-textos">Entregas para todo o Brasil</h3>
                <h4 className='text-4xl font-gafata mt-3'>R$ {valor}</h4>
                <h5 className="font-gafata text-[16px] w-60">ou em até 3 vezes de R$ 43,00 sem juros. Compre com um lindo vaso ou encomende de acordo com a sua preferência</h5>
                <h5 className="font-gafata text-[20px] pt-3 font-semibold">plantae.contato@plantae.com</h5>

                <div className="flex flex-row mt-4 justify-between">
                    <input className="border-[#9E9E9E] border bg-[#E9E9E9] w-[63%] h-10 outline-none shadow-sm drop-shadow-md p-2"></input>
                    <button className='w-[35%] h-10 bg-white border-[#9E9E9E] border text-[15px] shadow-sm drop-shadow-md ml-2 text-[#6F6B6B]'>Calcular frete</button>
                </div>

                <div className="w-full flex justify-center mt-10">
                    <Botao onClick={() => navegarCarrinho()} textoBotao='Carrinho' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProdutoEscolhido
