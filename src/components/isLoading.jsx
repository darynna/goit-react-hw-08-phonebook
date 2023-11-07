import { RotatingLines } from "react-loader-spinner"

export const Loading = ()=>{
    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RotatingLines
          strokeColor="purple"
          strokeWidth={5}
          animationDuration={0.75}
          width={52}
          visible={true}
        />
      </div>
    )
}