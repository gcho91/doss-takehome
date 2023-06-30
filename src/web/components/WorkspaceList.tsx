import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DosspaceApi from '../api'
import { v4 as uuidv4 } from 'uuid'
import '../style/WorkspaceList.css'

interface HomepageWorkspace {
  id: string
  title: string
}

/** Homepage list of all workspaces that have been created */
export default function WorkspaceList() {
  const [workspaces, setWorkspaces] = useState<HomepageWorkspace[]>([])
  const [mockWorkspaces, setMockWorkspaces] = useState<HomepageWorkspace[]>([])

  // Fetch all workspaces from the API
  useEffect(() => {
    async function fetchWorkspaces() {
      const workspaces = await DosspaceApi.getWorkspaces()
      setWorkspaces(workspaces)
    }

    fetchWorkspaces()
  }, [])

  const mockAddNewWorkspace = () => {
    let mockWorkspace = {
      id: uuidv4(),
      title: 'mock workspace',
    }
    setMockWorkspaces([...mockWorkspaces, mockWorkspace])
  }

  let totalWorkspaces = mockWorkspaces.length + workspaces.length;

  return (
    <div className="WorkspaceList">
      <div className="WorkspaceList__header">
        <h1 className="">
          All workspaces <span style={{ fontWeight: 'normal' }}> | {totalWorkspaces} | </span>
        </h1>
        <button
          className='WorkspaceList__button'
          onClick={() => {
            mockAddNewWorkspace()
          }}
        >
          + Add Workspace
        </button>
      </div>

      <div className='WorkspaceList__container'>

        {workspaces.map((value, key) => {
          return (
            <Link to={`/workspaces/${value.id}`} key={key} className='WorkspaceList__item'>
              <p>{value.title}</p>
            </Link  >
          )
        })}
        {mockWorkspaces.map((value, key) => {
          return (
            <Link to={`/workspaces/${value.id}`} key={key} className='WorkspaceList__item'>
              <p>{value.title}</p>
            </Link  >
          )
        })}
      </div>
    </div>
  )
}

// @to do: implement
// WIP - create form fields UI for handling Add New Workspace
export const AddWorkspaceFormFields = () => {
  const [formData, setFormData] = useState({ name: '', id: '' })

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
