import '../../styles/portfolio.css'
import ProjectCard from './ProjectCard';
import { BrowserRouter } from 'react-router-dom';

const projects = [
  {
    id: 1,
    link: "https://github.com/keithrsialana/hone-your-hollywood",
    imageUrl: 'https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    link: "https://github.com/Bluzke/vehicle-builder",
    imageUrl: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    link: "https://github.com/Bluzke/README-generator",
    imageUrl: 'https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    link: "https://github.com/Bluzke",
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    link: "https://github.com/Bluzke",
    imageUrl: 'https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    link: "https://github.com/Bluzke",
    imageUrl: 'https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];




export default function Portfolio() {
  return (
    <div className='outer'>
      <div className='inner'>
        {projects.map(item => (
          <ProjectCard key={item.id} link={item.link} imageUrl={item.imageUrl} />

        ))}
      </div>
    </div>
  )
}