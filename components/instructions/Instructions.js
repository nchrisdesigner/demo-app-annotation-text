import {useState} from 'react'
import styles from './instructions.module.css'
import { BsCheck2Circle } from 'react-icons/bs'
import Button from '@component/ui/button/Button';
import TextWithAnnotations from '../textwithannotations/TextWithAnnotations'


function Instructions() {
    const [next, setNext] = useState(false);

    if(next){
      return <TextWithAnnotations />
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.primaryHeadline}>Instructions Message</h1>
      <h3 className={styles.secondaryHeadline}>Secondary Instructions Message</h3>
      <ul className={styles.instructionsList}>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
        <li className={styles.instructionsItem}><BsCheck2Circle className={styles.icon} />Instructions Message</li>
      </ul>

      <Button onClick={() => setNext(!next)} color="#5C47C2" title="Collect Values" />
    </div>
  )
}

export default Instructions
