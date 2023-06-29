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

  return (
    <div className="WorkspaceList">
      <h1 className="WorkspaceList__header">All workspaces <span style={{ fontWeight: "normal" }}> | 3 | </span></h1>
      <div className='grid-container' style={{ display: "none" }}>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Workspace Title</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {workspaces.map((value, key) => {
            return (
              <tr key={key}>
                <td><Link to={`/workspaces/${value.id}`}>{value.title}</Link></td>
                <td>{value.id}</td>
              </tr>
            )
          })}
          {mockWorkspaces.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.title}</td>
                <td>{value.id}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => {
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

  return <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
    <button type="submit">Submit</button>
  </form>

}