import { RotatingLines } from 'react-loader-spinner';
import { LoaderSt } from './Loader.styled';


const Loader = () => {
    return (<LoaderSt>
        {/* <BallTriangle color="#7FA4ED" height={200} width={200} /> */}
        <RotatingLines
            strokeColor="#83faec"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
    </LoaderSt>
        )
}

export default Loader;