import planta1 from '../assets/planta1.png'

const SecaoProduto = ({ img, nome, valor, qtd, aumentar, diminuir, excluir }) => {
    return (
        <div className="w-full flex flex-row pt-5">
            <img src={img} alt='Planta selecionada para o carrinho' className='w-24' />
            <div className="">
                <h1 className='font-titulos text-2xl ml-4'>{nome}</h1>
                <h1 className='font-textos font-semibold text-[20px] ml-4'>{valor}</h1>
                <div className="w-full flex flex-row items-end h-[8vh]">
                    <div className="border border-verde-padrao w-[40%] h-[60%] flex flex-row justify-around mx-4">
                        <h4 className='font-gafata text-[28px]' onClick={aumentar}>+</h4>
                        <h4 className='font-gafata text-[28px]'>{qtd}</h4>
                        <h4 className='font-gafata text-[28px]' onClick={diminuir}>-</h4>
                    </div>
                    <h4 className='font-gafata text-[25px]' onClick={excluir}>Excluir</h4>
                </div>
            </div>
        </div>
    )
}

export default SecaoProduto
