import redes from '../assets/rede-social.png'

const CampoTexto = ({placeholder, type, onChange }) => {
    return (
        <input onChange={onChange} placeholder={placeholder} type={type} className='w-full h-12 bg-[#E9E9E9] shadow-sm drop-shadow-md p-3 text-[16px] my-3 outline-none'/>
    )
}

export default CampoTexto
