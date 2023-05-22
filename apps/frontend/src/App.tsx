import './App.css';
import { AppProvider } from './providers/AppProvider.provider';
import { UIProvider } from './providers/UI.provider';
import { NavigationRoutes } from './components/NavigationRoutes';

export const App = () => {
  return (
    <AppProvider>
      <UIProvider>
        <NavigationRoutes />
      </UIProvider>
    </AppProvider>
  );
};
