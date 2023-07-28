import { Link } from "react-router-dom"

const BlocoProdutos = ({ img, nome, texto, valor, onClick }) => {
    return (
        <div className="bg-cinzaD9 w-full h-[70vh] rounded-sm mt-6 flex flex-col items-center p-8">
            <img onClick={onClick} src={img} alt="Imagem da planta" className='w-full h-72 flex justify-centerx' />
            <p className='text-[2rem] font-extralight p-1 font-titulos'>{nome}</p>
            <div className="border-t border-black w-full" />
            <h3 className='font-gafata mt-2 text-[16px]'>{texto}</h3>
            <h3 className='text-[15px] mt-1 font-textos'>Abra a página para sabe se ela é a mais indicada para você </h3>
            <div className="w-full flex justify-start">
                <h4 className='text-3xl font-gafata mt-3'>R$ {valor}</h4>
            </div>
        </div>
    )
}

export default BlocoProdutos
