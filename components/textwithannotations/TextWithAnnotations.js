import { useState } from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import styles from "./annotation.module.css"; // import CSS file for styling
import { BsCheck2Circle } from 'react-icons/bs'
import Button from "@component/ui/button/Button";
import First from "../first/First";

function TextWithAnnotations() {
  const [selectedText, setSelectedText] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const [next, setNext] = useState(false);

  const handleSelection = () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      setSelectedText(selection.toString());
    }
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    const newComment = { text: selectedText, comment: comment, selected: false };
    setCommentsList([...commentsList, newComment]);
    setComment("");
    setSelectedText("");
  };
  // console.log(commentsList);

  if(next){
    // return <Levels selectedWordsArray={commentsList}  />
    return <First selectedWordsArray={commentsList}  />
  }

  return (
    <div>
      <h1 className={styles.primaryHeadline}>Primary Headline</h1>
      <p className={styles.text} onMouseUp={handleSelection} onTouchEnd={handleSelection}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod
        velit quis velit suscipit, ut mollis dolor fermentum. Sed ut erat
        tincidunt, commodo libero eget, cursus felis. Nullam vulputate nunc
        diam, eget laoreet metus lacinia a. Sed in lacus vel risus suscipit
        finibus.
      </p>
      {selectedText && (
        <div className={styles.commentBox}>
          <p>
            Selected text: <strong>{selectedText}</strong>
          </p>
          <textarea
          className={styles.textarea}
            placeholder="Add a Value"
            value={comment}
            onChange={handleComment}
          />
          <button className={styles.btn} onClick={handleAddComment}>Add Comment</button>
        </div>
      )}
      {commentsList.length > 0 && (
        <div>
          <h2 className={styles.valuesHeadline}>Values</h2>
          <ul className={styles.list}>
          {commentsList.map((item, index) => (
            <li className={styles.listItem} key={index}>
                <BsCheck2Circle className={styles.icon} />
                <div className={styles.valueTextContainer}>
                  <p className={styles.value} data-tip={item.comment}>{item.comment}</p>
                  <p className={styles.valueText}>{item.text}</p>
                </div>
                
              <ReactTooltip className={styles.tooltip} effect="solid" place="right" />
            </li>
          ))}

          </ul>
        </div>
      )}

        <Button onClick={() => setNext(!next)} color="#5C47C2" title="Create Levels" />
    </div>
  );
}

export default TextWithAnnotations;

// const handleTouchStart = (event) => {
//     event.preventDefault();
//     const touch = event.touches[0];
//     const range = document.createRange();
//     range.setStart(touch.target, 0);
//     range.setEnd(touch.target, 0);
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(range);
//   };
  
//   const handleTouchMove = (event) => {
//     event.preventDefault();
//     const touch = event.touches[0];
//     const range = document.caretRangeFromPoint(touch.clientX, touch.clientY);
//     window.getSelection().extend(range.startContainer, range.startOffset);
//   };
  
//   const handleTouchEnd = (event) => {
//     const selection = window.getSelection();
//     const selectedString = selection.toString();
//     setSelectedText(selectedString);
//     selection.removeAllRanges();
//   };
  