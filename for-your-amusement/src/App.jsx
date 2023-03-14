import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import ReactionVelocityCheck from './pages/ReactionVelocityCheck';
import LotteryMachine from './pages/LotteryMachine';
import RockPaperScissors from './pages/RockPaperScissors';
import { useState } from 'react';
import reactionThumbnail from './assets/images/reactionThumbnail_img.png';
import rspThumbnail from './assets/images/rspThumbnail_img.png';
import lottoThumbnail from './assets/images/lottoThumbnail_img.png';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const games = [
    {
      title: '반응속도체크',
      thumbnail: reactionThumbnail,
      path: '/reactionvelocitycheck',
      element: <ReactionVelocityCheck />,
    },
    {
      title: '가위바위보',
      thumbnail: rspThumbnail,
      path: '/rockpaperscissors',
      element: <RockPaperScissors />,
    },
    {
      title: '로또추첨기',
      thumbnail: lottoThumbnail,
      path: '/lotterymachine',
      element: <LotteryMachine />,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
    {
      title: '',
      thumbnail: null,
      path: '/',
      element: null,
    },
  ];

  return (
    <Router>
      {isLogin ? (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home games={games} />} />
            {games.map((game) => (
              <Route
                key={uuidv4()}
                path={`${game.path}`}
                element={game.element}
              />
            ))}
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path='/'>
            <Route
              index
              element={
                <>
                  <Header />
                  <Home games={games} />
                  <Footer />
                </>
              }
            />
          </Route>
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/usersignup' element={<UserSignUp />} />
        </Routes>
      )}
    </Router>
  );
}
export default App;
