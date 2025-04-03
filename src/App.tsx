import { ColorModeToggle } from '@/components/ColorTheme';
import { useColorMode } from '@/hooks/useColorTheme';
import styles from './App.module.css';

function App() {
  const { colorMode } = useColorMode();

  return (
    <>
      <main className={styles.appCard}>
        <h1>Vite + React</h1>
        <div className={styles.themeContainer}>
          Current theme: {colorMode}
          <ColorModeToggle />
        </div>
      </main>
    </>
  );
}

export default App;
