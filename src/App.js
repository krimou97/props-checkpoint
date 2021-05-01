import './App.css';
import Profile from './profile/profile';

function App() {
  const fullname = 'KRIMOU'
  const bio = 'Anything'
  const Profession = 'Devloper'
  const sayhello = () => {
    alert(Profession)
}

  const verefication = () => {
    prompt ("your age:")
  }
  return (
    <>
    <Profile 
            sayhello = {sayhello}
            verefication = {verefication}
            fullname = {fullname}
            profession = {Profession}
            bio = {bio} />
    </>
  );
}

export default App;
