import { Title } from "../Title/TitlePage"
import style from "./Content.module.scss"

export const Content = ({children, title}) => {

    return (
        <div className={style.contentwrapper}>
          <Title title={title}/>
          <section>{children}</section>
        </div>
    )
}