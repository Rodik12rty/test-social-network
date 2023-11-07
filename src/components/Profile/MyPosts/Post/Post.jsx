import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.wionews.com/sites/default/files/2018/09/12/20463-web%25252520default%25252520%2525283%252529-20170328074902.png" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}


export default Post;
