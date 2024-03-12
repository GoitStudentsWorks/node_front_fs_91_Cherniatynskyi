import { ThreeCircles } from 'react-loader-spinner';

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
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color={'var(--accentColor)'}
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};
