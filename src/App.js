import { Route, Routes } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import ListUsers from "./pages/ListUsers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<ListUsers />} />
          <Route path="add" element={<CreateUser />} />
          <Route path=":id/edit" element={<EditUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
