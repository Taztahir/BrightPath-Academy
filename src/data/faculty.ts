import team1 from '../assets/team-1.png'
import team2 from '../assets/team-2.png'
import team3 from '../assets/team-3.png'
import team4 from '../assets/team-4.png'

export interface FacultyMember {
  id: string
  name: string
  role: string
  category: 'Administration' | 'STEM' | 'Humanities' | 'Arts & Music'
  tag: string
  bio: string
  image: string
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 'elena-rodriguez',
    name: 'Dr. Elena Rodriguez',
    role: 'Head of School',
    category: 'Humanities',
    tag: 'HUMANITIES',
    bio: 'Over 20 years of experience in global educational leadership and curriculum design.',
    image: team1,
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Physics & Robotics',
    category: 'STEM',
    tag: 'STEM',
    bio: 'A former NASA engineer dedicated to bringing hands-on experimental science to the classroom.',
    image: team2,
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Visual Arts Director',
    category: 'Arts & Music',
    tag: 'FINE ARTS',
    bio: 'Encouraging students to find their unique voice through diverse media and creative expression.',
    image: team3,
  },
  {
    id: 'julian-vance',
    name: 'Dr. Julian Vance',
    role: 'Advanced Mathematics',
    category: 'STEM',
    tag: 'MATH',
    bio: 'Specializes in making complex mathematical theories accessible and engaging for young minds.',
    image: team4,
  },
  {
    id: 'clara-beaumont',
    name: 'Clara Beaumont',
    role: 'Registrar',
    category: 'Administration',
    tag: 'ADMISSIONS',
    bio: 'Helping families navigate their journey into the BrightPath community with care and clarity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'robert-chen',
    name: 'Robert Chen',
    role: 'World History',
    category: 'Humanities',
    tag: 'HUMANITIES',
    bio: 'Connecting the lessons of the past with the challenges of the future through immersive storytelling.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  },
]
