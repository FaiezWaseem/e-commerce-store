import AppRoutes from "./route"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
function App() {
  return (
    <RecoilRoot>
       <AppRoutes />
  </RecoilRoot>
  );
}

export default App;
