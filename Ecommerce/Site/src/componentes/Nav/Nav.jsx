import './NavCss.css'
import logo from '../../assets/logo.png'
import carrinho from '../../assets/carrinho.png'
import reciclagem from '../../assets/reciclagem.png'
import fechar from '../../assets/x.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Borda from '../Borda'
import axios from 'axios'

const Nav = ({apelido}) => {
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    const [menuAtivo, setMenuAtivo] = useState(false)
    const [fixedAtivo, setfixedAtivo] = useState('')
    const [suspenso, setSuspenso] = useState('hidden')
    const [naoSuspenso, setNaoSuspenso] = useState('block')

    useEffect(() => {
        if (menuAtivo) {
            setNaoSuspenso('hidden')
            setSuspenso('block')
        } else {
            setNaoSuspenso('block')
            setSuspenso('hidden')
        }
    }, [menuAtivo])


    const testee = () => {
        if (menuAtivo) {
            setMenuAtivo(false)
            setfixedAtivo('')
        } else {
            setMenuAtivo(true)
            setfixedAtivo('fixed')
        }
    }

    const sair = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            {token == undefined ?
                <nav className={`${fixedAtivo} w-full border-b bg-navBar border-[#5B665F]`}>
                    <div className="flex flex-row justify-around items-center pt-4 ">
                        <div className="flex flex-col " >
                            <div className='flex flex-col w-14' onClick={() => testee()}>
                                <div className={`${naoSuspenso} bg-black h-0.5 m-1`}></div>
                                <div className={`${naoSuspenso} bg-black h-0.5 m-1`}></div>
                                <div className={`${naoSuspenso} bg-black h-0.5 m-1`}></div>
                                <div className="w-14">
                                    <img className={`${suspenso} w-6`} src={fechar} alt='X para fechar o menu suspenso' onClick={() => testee()} />
                                </div>
                            </div>
                        </div>

                        <Link to='/'> <img src={logo} className='w-28 h-10' alt='Logo do Plantae com o nome PLANTAE em capslock e embaixo uma frase: Prezando pelo seu bem-estar' /> </Link>
                        <Link to='/carrinho'> <img src={carrinho} className='w-10' alt='Imgem de um carrinho' /> </Link>
                    </div>
                    <div className={`${suspenso} bg-fundo-tela h-screen fixed mt-6 z-10 w-[80%] flex flex-col pl-4`}>
                        <Link to={'/'}><h3 className='font-textos text-3xl my-3'>Início</h3></Link>
                        <Link to={'/produtos'}><h3 className='font-textos text-3xl mb-3'>Loja</h3></Link>
                        <Link to={'/blog'}><h3 className='font-textos text-3xl mb-3'>Blog</h3></Link>
                        <Link to={'/cadastro'}><h3 className='font-textos text-3xl mb-3'>Cadastrar</h3></Link>
                        <Link to={'/login'}><h3 className='font-textos text-3xl mb-5'>Logar</h3></Link>
                        <Link to={'/carrinho'}><h3 className='font-textos text-3xl mb-5'>Carrinho</h3></Link>

                        <Borda />
                        <div className="flex justify-center mt-5">
                            <div className="bg-white h-32 w-[95%] border border-[#D4D5D0] flex items-center p-5">
                                <div className="flex justify-center items-center border border-verde-padrao">
                                    <h3 className='font-gafata text-[15px] text-center p-2'>Plantae é o reino da natureza que agrupa as plantas, e por esse motivo escolhemos o nome da nossa marca.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <img src={reciclagem} className='w-12 mt-[-40px] mr-1' />
                        </div>
                        <h3 className='font-gafata text-[20px] text-center mt-5'>plantae.contato@plantae.com</h3>
                    </div>
                </nav>
                :
                <nav className={`${fixedAtivo} w-full border-b bg-navBar border-[#5B665F]`}>
                    <div className="flex flex-row justify-around items-center pt-4 ">
                        <div className="flex flex-col " >
                            <div className='flex flex-col w-14' onClick={() => testee()}>
                                <div className={`${naoSuspenso} bg-black h-0.5 m-1`}></div>
                                <div className={`${naoSuspenso} bg-black h-0.5 m-1`}></div>
                                <div className={`${naoSuspenso} bg-black h-0.5 m-1`}></div>
                                <div className="w-14">
                                    <img className={`${suspenso} w-6`} src={fechar} alt='X para fechar o menu suspenso' onClick={() => testee()} />
                                </div>
                            </div>
                        </div>

                        <Link to='/'> <img src={logo} className='w-28 h-10' alt='Logo do Plantae com o nome PLANTAE em capslock e embaixo uma frase: Prezando pelo seu bem-estar' /> </Link>
                        <Link to='/carrinho'> <img src={carrinho} className='w-10' alt='Imagem de um carrinho' /> </Link>
                    </div>
                    <div className={`${suspenso} bg-fundo-tela h-full fixed mt-6 z-10 w-[80%] flex flex-col pl-4`}>
                        <Link to={'/'}><h3 className='font-textos text-3xl my-3'>Início</h3></Link>
                        <Link to={'/produtos'}><h3 className='font-textos text-3xl mb-3'>Loja</h3></Link>
                        <Link to={'/blog'}><h3 className='font-textos text-3xl mb-3'>Blog</h3></Link>
                        <Link to={'/carrinho'}><h3 className='font-textos text-3xl mb-5'>Carrinho</h3></Link>
                        <h3 className='font-textos text-2xl mb-3'>Bem vindo (a), {apelido}</h3>
                        <h3 className='font-textos text-2xl mb-3' onClick={() => sair()}>Sair</h3>

                        <Borda />
                        <div className="flex justify-center mt-5">
                            <div className="bg-white h-32 w-[95%] border border-[#D4D5D0] flex items-center p-5">
                                <div className="flex justify-center items-center border border-verde-padrao">
                                    <h3 className='font-gafata text-[15px] text-center p-2'>Plantae é o reino da natureza que agrupa as plantas, e por esse motivo escolhemos o nome da nossa marca.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <img src={reciclagem} className='w-12 mt-[-40px] mr-1' />
                        </div>
                        <h3 className='font-gafata text-[20px] text-center mt-5'>plantae.contato@plantae.com</h3>
                    </div>
                </nav>
            }
        </>

    )
}

export default Nav
