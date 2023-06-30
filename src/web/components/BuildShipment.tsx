import { ShipmentTable } from '../../api/types'
import Table from './Table'
import '../style/BuildShipment.css'

interface BuildShipmentProps {
  buildShipment: ShipmentTable
}

export default function BuildShipment({ buildShipment }: BuildShipmentProps) {
  return (
    <div className="build-shipment">
      <p>
        <span className="build-number-label">Build Number: </span> {buildShipment.buildNumber}
      </p>
      <p>
        <span className="build-id-label">ID:</span> {buildShipment.id}
      </p>
      <Table
        id={buildShipment.id}
        buildNumber={buildShipment.buildNumber}
        shipments={buildShipment.shipments}
      />
    </div>
  )
}
