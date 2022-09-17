import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import Qazi from '../static/qazi.jpg'
import JSLogo from '../static/jsLogo.png'

const styles = {
    wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2rem] p-[1rem]`,
    accentedBtn: `flex items-center justify-center text-sm bg-black text-white my-[1rem] p-[.6rem] rounded-full`,
    searchBar: `flex items-center gap-[.6rem] h-[2.4rem] border px-[1rem] rounded-full`,
    searchInput: `border-none outline-none w-full`,
    autherContainer: `my-[1rem]`,
    autherProfileImageContainer: `w-[5rem] h-[5rem] rounded-full overflow-hidden`,
    autherName: `font-semibold mb-[.2rem] mt-[1rem]`,
    autherFollowing: `text-[#787878]`,
    autherActions: `flex gap-[.6rem] my-[.8rem]`,
    autherBtn: `bg-[#1a8917] text-white px-[.6rem] py-[.4rem] text-sm rounded-full`,
    recommendationContainer: ``,
    title: ``,
    articlesContainer: ``,
    recommendationAutherContainer: `flex items-center gap-[.6rem]`,
    recommendationAutherProfileImageContainer: `w-[1.4rem] h-[1.4rem] rounded-full overflow-hidden`,
    recommendationAutherName: `text-sm`,
    recommendationTitle: `font-bold`,
    recommendationThumnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
    recommendationThumnail: `object-cover`,
    articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
    articleContent: `flex-[4]`,
}

const Recommendations = ({ author }) => {
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.accentedBtn}>
                Get Unlimited Access
            </div>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input
                    className={styles.searchInput}
                    placeholder='Search'
                    type='text'
                />
            </div>
            <div className={styles.autherContainer}>
                <div className={styles.autherProfileImageContainer}>
                    <Image 
                        src={Qazi}
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.autherName}>Rafeh Qazi</div>
                <div className={styles.autherFollowing}>1M followers</div>
                <div className={styles.autherActions}>
                    <button className={styles.autherBtn}>Follow</button>
                    <button className={styles.autherBtn}><MdMarkEmailUnread /></button>
                </div>
            </div>
            <div className={styles.recommendationContainer}>
                <div className={styles.title}>More from Medium</div>
                <div className={styles.articlesContainer}>
                    {recommendedPosts.map(post => (
                    <div className={styles.articleContentWrapper}>
                    <div className={styles.articleContent}>
                    <div className={styles.recommendationAutherContainer}>
                        <div className={styles.recommendationAutherProfileImageContainer}>
                            <Image
                                src={post.author.image}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.recommendationAutherName}>{post.author.name}</div>    
                        </div>
                        <div className={styles.recommendationTitle}>
                            {post.title}
                        </div>
                    </div>
                    <div className={styles.recommendationThumnailContainer}>
                    <Image
                        className={styles.recommendationThumnail}
                        src={post.image}
                        width={100}
                        height={100}
                    />
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Recommendations

const recommendedPosts = [
    {
        title: 'What can I do with Replit?',
        image: ReplitLogo,
        author: {
            name: 'Clever Programmer',
            image: CPLogo,
        }
    },
    {
        title: 'THe Ultimate Javascript tutorial for bigginers',
        image: TutorialImg,
        author: {
            name: 'Rafeh Qazi',
            image: Qazi,
        }
    },
    {
        title: 'How to become a developer in 2022?',
        image: JSLogo,
        author: {
            name: 'Clever Programmer',
            image: CPLogo,
        }
    },
]