import ListaPostagens from '../../componentes/postagens/listaPostagens/ListaPostagens';
import './Home.css';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';


function Home() {
    return (
        <>
            <div className="bg-purple-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>

                        </div>
                    </div>

                    <div className="pb-5 flex justify-center ">
                        <img src='https://img.freepik.com/psd-gratuitas/tela-de-dispositivo-em-branco-de-marketing_23-2150453728.jpg?t=st=1709575907~exp=1709579507~hmac=444f9cc427245bde9fb5385b53bacee4c8c04eace3b537700294cb3ce97b034f&w=826"" className='w-2/3' />

                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;
