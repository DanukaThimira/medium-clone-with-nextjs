import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useState } from "react"
import { MediumContext } from "../context/MediumContext"
import { db } from "../firebase";

const styles = {
    wrapper: `w-[50rem] h-[35rem] flex flex-col gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll justify-start items-center`,
    fieldTitle: `flex-1 text-end`,
    title: `my-[2rem] font-bold text-3xl`,
    smallField: `w-full flex justify-between gap-[1rem]`,
    inputContainer: `flex-[4] h-min border-[.1rem] border-[#787878]`,
    inputField: `w-full border-0 outline-none bg-transparent`,
    accentedBtn: `bg-black text-white py-2 px-4 rounded-full`,
}

const PostModal = () => {
    const { currentUser } = useContext(MediumContext);

    const router = useRouter()

    const [title, setTitle] = useState('');
    const [brief, setBreif] = useState('');
    const [category, setCategory] = useState('');
    const [postLength, setpostLength] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [body, setBody] = useState('');

    const addPostToFirebase = async event => {
        event.preventDefault()

        await addDoc(collection(db, 'articles'), {
            bannerImage: bannerImage,
            body: body,
            category: category,
            brief: brief,
            postedOn: serverTimestamp(),
            postLength: Number(postLength),
            title: title,
            author: currentUser.email,
        })

        router.push('/')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Create New Post</div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Title</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type='text'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Breif</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type='text'
                        value={brief}
                        onChange={event => setBreif(event.target.value)}
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Banner Image URL</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type='text'
                        value={bannerImage}
                        onChange={event => setBannerImage(event.target.value)}
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Cetagory</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type='text'
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Estimated Read Length (in minutes)</span>
                <span className={styles.inputContainer}>
                    <input
                        className={styles.inputField}
                        type='text'
                        value={postLength}
                        onChange={event => setpostLength(event.target.value)}
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Article Text</span>
                <span className={styles.inputContainer}>
                    <textarea
                        className={styles.inputField}
                        type='text'
                        rows={12}
                        value={body}
                        onChange={event => setBody(event.target.value)}
                    />
                </span>
            </div>
            <button onClick={addPostToFirebase} className={styles.accentedBtn}>Submit</button>
        </div>
    )
}

export default PostModal