import { Container, createTheme, ThemeProvider } from '@mui/material';
import { palette } from '@mui/system';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import NavBar from './components/navBar';
import Dashboard from './dashboard';
import routes from './routes';

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <Container maxWidth="xl"  style={{padding: 0}}>
      <div className="App">
        <NavBar />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
