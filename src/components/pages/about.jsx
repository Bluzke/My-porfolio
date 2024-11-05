import "../../styles/about.css"
import Picture from '../../assets/profile-pic.jpg'

export default function About() {
    return (
        <div className= "about">
            <h1>About Me</h1>
            <img src={Picture} alt="picture of me" className='picture'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod, obcaecati optio, earum illum reprehenderit magnam, quis voluptates sed doloremque eaque dolorem! Dignissimos placeat molestias obcaecati totam, ipsam quia voluptatem!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat accusantium voluptates dolore aspernatur quos repudiandae nobis cupiditate molestias ex velit at, itaque odit debitis tenetur vitae architecto sequi dolorem dolorum in fugiat cumque reprehenderit. Quisquam eveniet consequuntur possimus quod.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur rem eligendi voluptatibus neque consequuntur dignissimos, ducimus, qui illo reprehenderit inventore nemo fuga suscipit, ratione quae. Perferendis quae eveniet porro officia velit! Quibusdam doloribus repellat omnis blanditiis dolor.</p>
        </div>
    )
}