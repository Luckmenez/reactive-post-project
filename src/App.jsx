import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/SideBar'
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Lucas Menezes" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis ratione dolorum nisi vero facilis doloribus nobis explicabo architecto placeat, consequatur earum in commodi. Explicabo quidem officia voluptatibus dicta laudantium." 
          />
        </main>
      </div>
    </div>
  )
}

