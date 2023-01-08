import { Header } from './components/Header'
import './global.css'
import style from './App.module.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

export function App() {
 
  const posts = [
    {
      id: 1,
      header: {
        avatar: 'https://github.com/NatanRei.png',
        name: 'Natan Rei',
        rule: 'Developer',
        datetime: new Date("2023-01-06 21:07:31")
      },
      post: [
        {type: 'text', content: 'Hello World'},
        {type: 'text', content: 'lorem Ipsum is simply dummy text'},
        {type: 'link', content: 'Lorem Ipsum is simply dummy text'}
      ]
    },
    {
      id: 2,
      header: {
        avatar: 'https://github.com/NatanRei.png',
        name: 'john doe',
        rule: 'Machine Operator',
        datetime: new Date("2022-08-21 11:23:01")
      },
      post: [
        {type: 'text', content: 'Hello World'},
        {type: 'text', content: 'hahahahah hahahha ahahhaha hahah'},
        {type: 'link', content: 'Lorem Ipsum is simply dummy text'}
      ]
    }
  ];

  return (
    <div className="App">
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => <Post header={post.header} post={post.post} key={post.id}/>)}

        </main>
      </div>
    </div>
  )
}
