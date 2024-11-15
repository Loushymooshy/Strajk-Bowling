//A component that renders a line of text with an h3 tag. The text is passed as a prop. styled as horizontal line with words in the middle.

import style from './H3Line.module.css'

const H3Line = ({
     text,
    }: {
    text: string;
 }) => {


  return (
    <>
    <div className={style.container}>
    <h3 className={style.line}>
         <span className={style.text}> {text} </span>
    </h3>
    </div>
    </>
  )
}

export default H3Line