import DefaultVersion from './components/DefaultVersion'
import 'antd/dist/antd.css';
import './App.css';
import { Tabs } from 'antd';
import IlyasVersion from './components/IlyasVersion';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const App = () => {
	return (
		<div className='App'>
			<div className='sign-up'>
				<h1 className='sign-up-title'>Подобрать одежду по параметрам собаки</h1>

				<Tabs defaultActiveKey='1' onChange={callback} centered>
					{' '}
					<TabPane tab='Вариант 1' key='1'>
					<DefaultVersion />
					</TabPane>
					<TabPane tab='Вариант 2' key='2'>
						<IlyasVersion/>
					</TabPane>
				</Tabs>
			</div>
		</div>
	)
}

export default App
