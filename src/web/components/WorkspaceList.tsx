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

  // @todo: add new workspace
  // current workspaces are fetched from api, then setWorkspaces() setstate
  // to add new workspace - 
  // need to call corresponding API 

  const mockAddNewWorkspace = async () => {

    const newWorkspace = await DosspaceApi.createWorkspace();
    console.log(newWorkspace, 'new workspace')
    // on refresh, the workspaces load
    // add workspace btn click -> form with workspace info -> update workspace 
  }

  const resetServer = async () => {

  }

  let totalWorkspaces = mockWorkspaces.length + workspaces.length

  return (
    <div className="WorkspaceList">
      <div className="WorkspaceList__header">
        <h1 className="">
          All workspaces <span style={{ fontWeight: 'normal' }}> | {totalWorkspaces} | </span>
        </h1>
        <button
          className="WorkspaceList__button"
          onClick={() => {
            mockAddNewWorkspace()
          }}
        >
          + Add Workspace
        </button>
        <button
          className="WorkspaceList__button"
          onClick={() => {

          }}
        >Reset Button</button>
      </div>

      <div className="WorkspaceList__container">
        {workspaces.map((value, key) => {
          return (
            <Link to={`/workspaces/${value.id}`} key={key} className="WorkspaceList__item">
              <p>{value.title} - {value.id}</p>
            </Link>
          )
        })}
        {mockWorkspaces.map((value, key) => {
          return (
            <div key={key} className="WorkspaceList__item">
              <p>{value.title}</p>
            </div>
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
