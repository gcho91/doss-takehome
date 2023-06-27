import { useEffect, useState } from 'react'
import '../style/WorkspaceList.css'
import DosspaceApi from '../api'
import { Link } from 'react-router-dom'

interface HomepageWorkspace {
  id: string
  title: string
}

/** Homepage list of all workspaces that have been created */
export default function WorkspaceList() {
  const [workspaces, setWorkspaces] = useState<HomepageWorkspace[]>([])

  // Fetch all workspaces from the API
  useEffect(() => {
    async function fetchWorkspaces() {
      const workspaces = await DosspaceApi.getWorkspaces()
      setWorkspaces(workspaces)
    }

    fetchWorkspaces()
  }, [])

  return (
    <div className="WorkspaceList">
      <h1 className="WorkspaceList__header">All workspaces (WorkspaceList component - dashboard view)</h1>
      <div className='grid-container'>
        {workspaces.map((workspace) => (
          <div key={workspace.id}>
            <div style={{ backgroundColor: "red" }}>
              <Link to={`/workspaces/${workspace.id}`}>{workspace.title}</Link>
              <p>id: {workspace.id}</p>
            </div>
          </div>
        ))}
        <div>Add a new workspace</div>
      </div>
    </div>
  )
}
