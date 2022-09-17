import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import ArticleMain from '../../components/ArticleMain'
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'
import { MediumContext } from '../../context/MediumContext'

const styles = {
    wrapper: `flex`,
}

const Post = () => {
    const {posts, users} = useContext(MediumContext);
    const router = useRouter();
    const [post, setPost] = useState([])
    const [author, setAuthor] = useState([])

    useEffect(() => {
        //guard clause
    if (posts.length === 0){
        return
    }

    console.log(router.query.slug , '🚀')

    setPost(posts.find(post => post.id === router.query.slug))
    setAuthor(users.find(user => user.id === post.data?.author))

    }, [post])
    

    return (
        <div className={styles.wrapper}>
            <ReadersNav />
            <ArticleMain post={post} author={author} />
            <Recommendations />
        </div>
    )
}

export default Post