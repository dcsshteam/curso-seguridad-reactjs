import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import Ejemplo1 from './Ejemplo1'


export default function App() {

  const user: User = {
    name: 'Pepe',
    role: Role.USER
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Ejemplo1 />} />
        <Route element={
          <ProtectedRoute
            user={user}
            acceptedRoles={[Role.ADMIN, Role.SUPERADMIN]}
            isAllowed={sessionStorage.getItem('user') !== undefined && sessionStorage.getItem('user') !== null}
            redirectPath='/not-allowed'
          />} >

          <Route path="/protected" element={<h1>Ruta protegida 1</h1>} />
          <Route path="/protected-2" element={<h1>Ruta protegida 2</h1>} />
          <Route path="/protected-3" element={<h1>Ruta protegida 3</h1>} />
        </Route>
        <Route path="/not-allowed" element={<h1>No tienes permisos para ver esta página</h1>} />
      </Routes>
    </BrowserRouter >
  )
}

export enum Role {
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
  USER = "user"
}

export interface User {
  name: string;
  role: Role;
}
