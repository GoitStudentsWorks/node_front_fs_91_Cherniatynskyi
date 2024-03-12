import { TailSpin } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color='#bedbb0'
        secondaryColor='bedbb0'
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};

export const HeaderSpinner = () =>{
  return(<TailSpin
  height="30"
  width="30"
  color='#bedbb0'
  secondaryColor='bedbb0'>
  </TailSpin>)
}
