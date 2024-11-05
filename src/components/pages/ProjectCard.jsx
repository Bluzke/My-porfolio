import '../../styles/portfolio.css'

// export default function ProjectCard({ title, link, imageUrl}) {
export default function ProjectCard({title, link, imageUrl}) {
    // console.log(props)
return (
    <a href={link} className="portfolio" style= {{backgroundImage: `url(${imageUrl})`}}>
    </a>
)
}