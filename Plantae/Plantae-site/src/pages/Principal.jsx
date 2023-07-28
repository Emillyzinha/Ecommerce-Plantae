import './CssBackground.css'

import Footer from "../componentes/Footer"
import Nav from "../componentes/Nav/Nav"

import planta1 from '../assets/planta1.png'
import planta2 from '../assets/planta2.png'
import planta3 from '../assets/planta3.png'
import planta4 from '../assets/planta4.png'
import planta5 from '../assets/planta5.png'
import planta6 from '../assets/planta6.png'
import vaso1 from '../assets/vaso1.png'
import vaso2 from '../assets/vaso2.png'
import grupo from '../assets/grupo.png'
import Borda from '../componentes/Borda'
import reciclagem from '../assets/reciclagem.png'
import { Link } from 'react-router-dom'


function Principal() {

  return (
    <div className="h-screen w-full ">
      <Nav />
      <div className="flex flex-col bg-fundo-tela ">
        <div className="bg-topo w-full">
          <p className="text-4xl text-verde-padrao text-center font-titulos p-4">Seu bem-estar em primiero lugar!</p>
        </div>
        <p className="text-5xl text-verde-padrao p-3 mt-8 font-titulos">CONHEÇA O ACERVO:</p>
        <div className="w-full flex flex-col p-3 mt-5">
          <div className="w-full flex flex-row justify-around">
            <Link to={'/produtos'} > <img className="w-full" src={planta1} alt="Uma planta" /> </Link>
            <Link to={'/produtos'} > <img className="w-full" src={planta2} alt="Uma planta" /> </Link>
          </div>
          <div className="w-full flex flex-row justify-around mt-3">
            <Link to={'/produtos'} > <img className="w-full" src={planta3} alt="Uma planta" /> </Link>
            <Link to={'/produtos'} > <img className="w-full" src={planta4} alt="Uma planta" /> </Link>
          </div>
          <div className="w-full flex flex-row justify-around mt-3">
            <Link to={'/produtos'} > <img className="w-full" src={planta5} alt="Uma planta" /> </Link>
            <Link to={'/produtos'} > <img className="w-full" src={planta6} alt="Uma planta" /> </Link>
          </div>
        </div>
        <Borda />
        <p className="font-titulos text-[2rem] text-center p-3">Personalize seu vaso!</p>
        <div className="p-3">
          <div className="bg-verde-padrao flex flex-row justify-around h-[19rem] items-center">
            <img className="w-[44%] h-[15rem]" src={vaso1} alt="Um vaso" />
            <img className="w-[44%] h-[15rem]" src={vaso2} alt="Um vaso" />
          </div>
        </div>
        <p className="font-gafata text-right text-2xl pr-3">Entre em contato conosco para realizar o orçamento!</p>
        <div className="border border-black m-3 bg-white">
          <h3 className="font-gafata text-2xl text-center">plantae.contato@plantae.com</h3>
        </div>
        <Borda />
        <p className="text-4xl text-center p-3 font-titulos">SOBRE NÓS</p>
        <h3 className="text-[20px] font-gafata px-3 text-center mb-3">Somos uma equipe apaixonada por plantas e meio ambiente, e estamos comprometidos em oferecer uma grande variedade de plantas de qualidade, sempre pensando na sustentabilidade. Trabalhamos com práticas sustentáveis desde os fornecedores, descartes e produtos finais.</h3>
        <h3 className="text-[20px] font-gafata px-3 text-center">Nosso objetivo é ajudá-lo a criar um ambiente verde e saudável em casa, sem agredir o meio ambiente e por isso, a cada 10 compras feitas em nosso site, plantamos uma árvore. No final do pedido é possível escolher o lugar para plantá-la, entre eles estão São Paulo, Bahia, Rio de Janeiro, Minas Gerais e Santa Catarina.</h3>
        <img className="p-5" src={grupo} alt="Integrantes da loja Plantae" />
        <Borda />
        <div className="w-full flex flex-row">
          <div className="my-3">
            <div className="p-3">
              <p className='font-galdeano text-[22px] text-verde-integrantes'>Maria Silva - Ana Santos </p>
              <p className='font-galdeano text-[22px] text-verde-integrantes'>Beatriz Oliveira - Juliana Pereira</p>
            </div>
            <div className="px-3">
              <p className='font-galdeano text-[22px] text-verde-integrantes'>João Souza - Pedro Costa</p>
              <p className='font-galdeano text-[22px] text-verde-integrantes'>Lucas Rocha - André Almeida</p>
            </div>
          </div>
          <div className="flex items-end justify-end w-20">
            <img className='w-14 h-14' src={reciclagem} alt='Imgem de três folhaas rodando simbolizando reciclagem' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Principal
