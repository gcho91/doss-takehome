import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DosspaceApi from '../api';
import { Workspace } from '../../api/types';
import BuildShipment from './BuildShipment';
import '../style/WorkspaceView.css'

export default function WorkspaceView() {
  const [isLoading, setLoading] = useState(false);
  const [workspaceData, setWorkspaceData] = useState<Workspace>();
  const { id: workspaceId } = useParams();

  // Fetch workspace info from API
  useEffect(() => {
    async function fetchTableData() {
      setLoading(true);
      const tableData = await DosspaceApi.getWorkspace(workspaceId!);
      setWorkspaceData(tableData)
      setLoading(false);
    }
    fetchTableData()
  }, [workspaceId])

  if (isLoading) return <p>Loading...</p>
  if (!workspaceData) return <p>No profile data</p>

  return (
    <div>
      <h1>Name: {workspaceData.title}</h1>
      <p>ID: {workspaceData.id}</p>
      <p>Build Shipments: {workspaceData.buildShipments.length} </p>
      <div className='build-shipments-row'>
        {workspaceData.buildShipments.map((item) => (
          <div key={item.id} className="build-shipment">
            <BuildShipment buildShipment={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
