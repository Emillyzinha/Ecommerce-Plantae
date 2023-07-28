import { useState } from "react";
import Botao from "../componentes/Botao";
import CampoTexto from "../componentes/CampoTexto";
import Footer from "../componentes/Footer";
import Nav from "../componentes/Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const logar = () => {
        if (email == '' || senha == ''){
            alert('Preencha todos os campos')
        } else {
            axios.post('http://127.0.0.1:8000/auth/jwt/create', {
                email: email,
                password: senha
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data))
                navigate('/')
            })
            .catch((erro) => {
                if(erro?.response?.data?.detail == 'No active account found with the given credentials'){
                    alert('Por favor, confirme os seus dados')
                }
                console.log(erro);
            })
        }
    }

    return (
        <div className="h-screen w-full">
            <Nav />
            <div className="h-[82.5vh] flex flex-col bg-fundo-tela p-5">
                <div className="flex flex-col justify-center h-full">
                    <p className="text-4xl text-verde-padrao mb-2">LOGIN</p>
                    <CampoTexto placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                    <CampoTexto placeholder='Senha' onChange={(e) => setSenha(e.target.value)} type='password'/>
                    <div className="w-full flex justify-center mt-4">
                        <Botao textoBotao='Logar' onClick={() => logar()} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
