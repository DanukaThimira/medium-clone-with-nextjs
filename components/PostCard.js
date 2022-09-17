import Image from 'next/image'
import Logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const styles = {
  autherContainer: 'flex gap-[.4rem] ',
  autherImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  autherImage: 'object-cover',
  breifing: 'text-[#787878]',
  title: 'font-bold text-2xl',
  autherName: 'font-semibold',
  detailsContainer: 'flex items-center justify-between text-[#787878]',
  articleDetails: 'my-2 text-[.8rem]',
  category: 'bg-[#f2f3f2] p-1 rounded-full',
  bookmaekContainer: 'cursor-pointer',
  postDatails: '',
  wrapper: 'flex max-w-[46rem] h-[9rem] items-center gap-[1rem] cursor-pointer justify-between',
  thumnailContainer: ''
}

const PostCard = ({post}) => {
  
  const [authorData, setAuthorData] = useState(null)

  useEffect(() => {
    const getAuthorData = async () => {
      const querySnapshot = await getDoc(doc(db, 'users', post.data.author));
      console.log(querySnapshot.data())
      setAuthorData(querySnapshot.data())
    }
  getAuthorData()
  }, [])

  return (
    <Link href={`/post/${post.id}`}>
    <div className={styles.wrapper}>
    <div className={styles.postDatails}>
    <div className={styles.autherContainer}>
      <div className={styles.autherImageContainer}>
      <Image 
       src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
       className={styles.autherImage}
       width={40}
       height={40}
      />
      </div>
      <div className={styles.autherName}>{authorData?.name}</div>
    </div>
      <h1 className={styles.title}>{post.data.title}</h1> 
      <div className={styles.breifing}>{post.data.brief}</div>
      <div className={styles.detailsContainer}>
      <span>{
          new Date(post.data.postedOn).toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
          })
        } • {post.data.postLength} min read • <span className={styles.category}>{post.data.category}</span></span>
      <span className={styles.bookmarkContainer}>
        <FiBookmark className='h-5 w-5' />
      </span>
      </div>
    </div>
    
    <div className={styles.thumnailContainer}>
      <Image 
        width={100}
        height={100}
        src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
      />
    </div>
    </div>
    </Link>
  )
}

export default PostCard