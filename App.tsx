import { StatusBar } from 'expo-status-bar';
import { Home } from './src/Screens/Home';

export default function App() {
  return (
    <>
      <StatusBar
        style="dark" 
        backgroundColor='transparent'
        translucent
      />
      
      <Home/>

    </>
  );
}