import {useState} from 'react'
import styles from './welcome.module.css'
import { BsArrowRight } from 'react-icons/bs'
import Instructions from '../instructions/Instructions';
import Button from '@component/ui/button/Button';

// BsArrowRight

function Welcome() {
    const [start, setStart] = useState(false);

    if(start){
      return <Instructions />
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.primaryHeadline}>Welcome Message</h1>
      <h3 className={styles.secondaryHeadline}>Secondary Welcome Message</h3>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iste nam! Odio culpa ducimus dignissimos, explicabo labore dolore corrupti sed, distinctio itaque tempora illum animi, sunt quos ut ipsam maxime non architecto. A, eaque.</p>
      <form>
        <div className={styles.inputContainer}>
            <label htmlFor="password">Insert your Password</label>
            <input name="password" className={styles.input} type="text" />
        </div>
        
      </form>
      {/* <button onClick={() => setStart(!start)} className={styles.btn}>Start <BsArrowRight/></button> */}
      <Button onClick={() => setStart(!start)} color="#5C47C2" title="Start" />
    </div>
  )
}

export default Welcome
