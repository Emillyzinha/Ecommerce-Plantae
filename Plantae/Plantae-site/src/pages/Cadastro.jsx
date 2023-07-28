import { useState } from "react";
import Botao from "../componentes/Botao";
import CampoTexto from "../componentes/CampoTexto";
import Footer from "../componentes/Footer";
import Nav from "../componentes/Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cadastro() {
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [apelido, setApelido] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [CPF, setCPF] = useState('')
    const [numeroCelular, setNumeroCelular] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const navigate = useNavigate()

    const cadastrar = () => {
        if (nomeCompleto == '' || apelido == '' || dataNascimento == '', CPF == '', numeroCelular == '', email == '' || senha == '' || confirmarSenha == '') {
            alert('Preencha todos os campos')
        } else {
            axios.post('http://127.0.0.1:8000/auth/users/', {
                nomeCompleto: nomeCompleto,
                username: apelido,
                cpf: CPF,
                data_nascimento: dataNascimento,
                numero_telefone: numeroCelular,
                password: senha,
                email: email
            })
                .then((res) => {
                    console.log('deu certo', res)
                    navigate('/')
                })
                .catch((erro) => {
                    console.log('deu errado', erro);
                })
        }
    }

    return (


        <div className="h-screen w-full ">
            <Nav />
            <div className="flex flex-col bg-fundo-tela p-5">
                <p className="text-4xl text-verde-padrao mb-2">CADASTRO</p>
                <CampoTexto onChange={(e) => setNomeCompleto(e.target.value)} placeholder='Nome completo' />
                <CampoTexto onChange={(e) => setApelido(e.target.value)} placeholder='Apelido' />
                <CampoTexto onChange={(e) => setDataNascimento(e.target.value)} type='date' />
                <CampoTexto onChange={(e) => setCPF(e.target.value)} placeholder='CPF' />
                <CampoTexto onChange={(e) => setNumeroCelular(e.target.value)} placeholder='Celular' />
                <CampoTexto onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
                <CampoTexto onChange={(e) => setSenha(e.target.value)} placeholder='Senha' />
                <CampoTexto onChange={(e) => setConfirmarSenha(e.target.value)} placeholder='Confirmação da senha' type='password'/>
                <div className="w-full flex justify-center mt-4">
                    <Botao textoBotao='Cadastrar' onClick={() => cadastrar()} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cadastro
