import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
export const Restricted = ({element: Element}) =>{
  const isAuth = useSelector(state => state.auth.token)
  return isAuth?.length>1 ? <Navigate to='/home'/> : <Element/>
}
