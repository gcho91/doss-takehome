import { useCallback, useEffect, useState } from 'react'
import '../style/WorkspaceList.css'
import DosspaceApi from '../api'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

interface HomepageWorkspace {
  id: string
  title: string
}

/** Homepage list of all workspaces that have been created */
export default function WorkspaceList() {
  const [workspaces, setWorkspaces] = useState<HomepageWorkspace[]>([])
  const [mockWorkspaces, setMockWorkspaces] = useState<HomepageWorkspace[]>([]);

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
      title: "mock workspace"
    }
    setMockWorkspaces([...mockWorkspaces, mockWorkspace])
  }

  useEffect(() => {
    console.log(mockWorkspaces)
  }, [mockWorkspaces])

  return (
    <div className="WorkspaceList">
      <h1 className="WorkspaceList__header">All workspaces (WorkspaceList component - dashboard view)</h1>
      <div className='grid-container'>
        {workspaces.map((workspace) => (
          <div key={workspace.id} className='workspace-container'>
            <div >
              <Link to={`/workspaces/${workspace.id}`}>{workspace.title}</Link>
              <p>id: {workspace.id}</p>
            </div>
          </div>
        ))}

        {mockWorkspaces.length > 0 &&
          mockWorkspaces.map((x, ind) => (
            <div key={x.id} className='mock-workspace-container workspace-container'>
              <p>{x.title} {ind}</p>
              <p>{x.id}</p>
            </div>
          ))
        }

      </div>
      <div className='mock-workspaces'>

      </div>

      <div>
        <button onClick={() => {
          console.log('adding new workspace')
          mockAddNewWorkspace();
        }}>Add new workspace</button>
      </div>
    </div>
  )
}

export const AddWorkspaceFormFields = () => {

  const [formData, setFormData] = useState({ name: "", id: "" })

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return <form onSubmit={() => console.log('handle submit')}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

    {/* <label htmlFor="id">id:</label>
    <input type="text" id="id" name="email" value={formData.email} onChange={handleChange} /> */}

    <button type="submit">Submit</button>
  </form>

}