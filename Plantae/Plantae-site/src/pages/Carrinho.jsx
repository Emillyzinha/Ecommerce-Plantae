import { useLocation } from "react-router-dom";
import Footer from "../componentes/Footer";
import Nav from "../componentes/Nav/Nav";
import SecaoProduto from "../componentes/SecaoProduto";
import { useEffect, useState } from "react";
import axios from "axios";


function Carrinho() {
    const location = useLocation()

    const [img, setImg] = useState('')
    const [nomePlanta, setNomePlanta] = useState('')
    const [valor, setValor] = useState('')
    // let plantaID = location.state.plantaID

    // console.log(location.state);

    if (location.state == null) {
        console.log('vish');
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/plantae/plantas/')
            .then((res) => {
                if (location.state == null) {
                } else {
                    let plantaID = location.state.plantaID
                    const produtoSelecionado = res.data[plantaID]
                    console.log(produtoSelecionado);
                    setImg(produtoSelecionado.imagem)
                    setNomePlanta(produtoSelecionado.nome)
                    setValor(produtoSelecionado.valor)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return (
        <>
            {location.state == null ?

                <p>VISH</p>

                :

                <div className="h-screen w-full ">
                    <Nav />
                    <div className="flex flex-col bg-fundo-tela p-5">
                        <p className="text-5xl text-verde-padrao mb-2 font-titulos font-bold">Carrinho</p>
                        <SecaoProduto img={img} nome={nomePlanta} valor={valor} />
                        <div className="border w-full mt-10" />
                        <div className="flex flex-row p-3 justify-between">
                            <h3 className='font-textos font-semibold text-3xl'>Subtotal</h3>
                            <h3 className='font-textos font-semibold text-3xl'>R$ 146</h3>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}

export default Carrinho
