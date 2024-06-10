import { useFetch } from './hooks/useFetch';
import { Quest } from './types/Quest';

import './App.scss';
import { HomeContainer } from './components/HomeContainer';
import { Title } from './components/Title';
import { QuestsItemsList } from './components/QuestsItemsList';
function App() {
  const { data, loading, isError } = useFetch<Quest>(
    'http://localhost:3000/quests'
  );

  console.log(data);

  return (
    <div className='app'>
      <HomeContainer>
        <Title
          infoMarkText='Some quests info'
          containerClassName='app__title-container'
        >
          Quests
        </Title>
        <QuestsItemsList
          listData={data}
          loading={loading}
          isError={isError}
        />
      </HomeContainer>
    </div>
  );
}

export default App;
