import AppRoutes from "./route"
import {
  RecoilRoot,
} from 'recoil';
function App() {
  return (
    <RecoilRoot>
       <AppRoutes />
  </RecoilRoot>
  );
}

export default App;
